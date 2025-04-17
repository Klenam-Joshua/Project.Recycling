import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
  List,
  Button,
} from "reactstrap";
//

import { SAVE_ANSWER } from "../../../Endpoints/EducationEndpoint";

import { useAuth } from "../../../hooks/useAuth";
import { usePost } from "../../../hooks/usePost";
import toast from "react-hot-toast";
import { useState } from "react";

export default function QuestionsModal({
  questions,
  openModal,
  closeModal,
  isSubmitted,
  setQuestions,
  hasAnswered,
  setHasAnswered,
}) {
  const { auth } = useAuth();
  const [answersCount, setAnswersCount] = useState(0);

  //
  const { mutate, isLoading } = usePost(() => {
    setHasAnswered(true);
    toast.success("Answered successfully");
  });

  //
  const handleOnSelect = (qIndx, choiceIndx) => {
    const editedQuestions = questions?.map((question, indx) => {
      if (indx == qIndx) {
        return {
          ...question,
          choices: question?.choices?.map((choice, cindx) => {
            if (cindx === choiceIndx) {
              return { ...choice, selectedAnswer: true };
            }
            return choice;
          }),
        };
      }

      return question;
    });

    // console.log({ editedQuestions });
    setQuestions(editedQuestions);
  };

  const handleSubmit = () => {
    let allSelected = true;

    let correctAnswers = 0;
    const selectedChoices = questions.map((question) => {
      //
      const selectedAnswer = question?.choices?.find(
        (choice) => choice?.selectedAnswer === true
      );
      //   const isRightAnswer = question?.choices?.find(
      //     (choice) => choice?.isRightAnswer === true
      //   );

      if (!selectedAnswer) {
        allSelected = false;
      }

      if (selectedAnswer?.isRightAnswer) {
        correctAnswers += 1;
      }

      console.log({ selectedAnswer });

      //
      return {
        questionId: question._id,
        userId: auth._id,
        multipleChoiceId: selectedAnswer?._id,
      };
    });

    if (!allSelected) {
      return toast.error("Please all questions must be attempted");
    }

    setAnswersCount(correctAnswers);

    console.log({ selectedChoices });
    mutate({
      data: {
        answers: selectedChoices,
      },
      url: SAVE_ANSWER(),
    });
  };
  return (
    <div>
      <Modal isOpen={openModal} onClosed={closeModal} size="lg">
        <ModalHeader id="header__1">
          <div className="d-flex justify-content-between">
            <span>Questions</span>
            {hasAnswered && (
              <div>
                Final Score:{" "}
                <span
                  style={{
                    color: "",
                  }}
                >
                  {answersCount} / {questions?.length}
                </span>
              </div>
            )}
          </div>
        </ModalHeader>
        <ModalBody
          style={{
            height: "30rem",
            overflow: "auto",
          }}
        >
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            {questions?.map((question, id) => {
              return (
                <AccordionItem key={question._id}>
                  <AccordionHeader targetId="1">
                    {question.question}
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <List>
                      {question?.choices?.map((choice, indx) => {
                        return (
                          <li
                            style={{
                              background: hasAnswered
                                ? choice.selectedAnswer && choice.isRightAnswer
                                  ? "green"
                                  : choice.selectedAnswer &&
                                    !choice.isRightAnswer
                                  ? "red"
                                  : ""
                                : "",
                            }}
                            // key={choice._id}
                            key={choice._id}
                            className="d-flex gap-2"
                          >
                            <input
                              disabled={hasAnswered}
                              onChange={(e) => {
                                handleOnSelect(id, indx);
                              }}
                              checked={choice.selectedAnswer}
                              type="radio"
                              name={question._id}
                              id={choice._id}
                            />
                            <label htmlFor={choice._id}>
                              {`${choice.label}.  ${choice?.multipleChoice}`}
                            </label>
                          </li>
                        );
                      })}
                    </List>
                  </AccordionBody>
                </AccordionItem>
              );
            })}
          </UncontrolledAccordion>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" onClick={closeModal}>
            Close
          </Button>
          {!hasAnswered && (
            <Button
              disabled={isLoading}
              size="sm"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
}
