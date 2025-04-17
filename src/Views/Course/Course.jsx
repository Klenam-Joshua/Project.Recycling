import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { usePut } from "../../hooks/usePut";
import { useAuth } from "../../hooks/useAuth";

import TopBanner from "../../Layout/TopBanner/TopBanner";
import { Button, Col, Row } from "reactstrap";
import ContentLoader from "react-content-loader";
import QuestionsModal from "./QuestionsModal/QuestionsModal";
import ReactPlayer from "react-player";

import { useEffect, useState } from "react";
import { UPDATE_VIDEO_PROGRESS } from "../../Endpoints/GameEndpoints";

export default function Course() {
  const { id: courseId } = useParams();
  const { auth } = useAuth();
  const [currentVideo, setCurrentVideo] = useState({});
  const [openQuestionModal, setOpenQuestionModal] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [questionsCp, setQuestionsCp] = useState([]);

  // Fetch Videos
  const {
    data: videoData,
    isLoading,
    refetch: refetchVideos,
  } = useFetch(
    `video/${courseId}`,
    [`${courseId}__${auth?.userName}`],
    (res) => {
      const savedIndex =
        JSON.parse(localStorage.getItem(`nextIndex_${auth._id}`)) || 0;
      const nextVideo = res?.items?.[savedIndex];
      if (nextVideo) {
        setCurrentVideo({
          ...nextVideo,
          indx: savedIndex,
          url: nextVideo.videourl,
          isCompleted: nextVideo?.progress?.isCompleted,
        });
      }
    }
  );

  // Fetch Questions
  const { data: questionsData, refetch: refetchQuestions } = useFetch(
    `question?courseId=${courseId}`,
    [`questions_${courseId}`]
  );

  const { mutate } = usePut(() => {
    refetchQuestions();
    refetchVideos();
  });

  // Sync questions data to state
  useEffect(() => {
    setHasAnswered(questionsData?.hasAnswered);
    if (!questionsCp?.length) {
      setQuestionsCp(questionsData?.items || []);
    }
  }, [questionsData]);

  // On first load or when videos update
  useEffect(() => {
    const savedIndex =
      JSON.parse(localStorage.getItem(`nextIndex_${auth._id}`)) || 0;
    const firstVideo = videoData?.items?.[savedIndex];
    if (firstVideo) {
      setCurrentVideo({
        ...firstVideo,
        indx: savedIndex,
        url: firstVideo.videourl,
        isCompleted: firstVideo?.progress?.isCompleted,
      });
    }
  }, [videoData]);

  const closeQuestionModal = () => {
    setOpenQuestionModal(false);
  };

  const handleProgress = (progress) => {
    const { played } = progress;
    const percentagePlayed = played * 100;

    if (percentagePlayed >= 90 && !currentVideo?.isCompleted) {
      if (timeoutId) clearTimeout(timeoutId);

      const id = setTimeout(() => {
        const nextIndex = currentVideo.indx + 1;
        localStorage.setItem(`nextIndex_${auth._id}`, nextIndex);

        mutate({
          data: {
            progress: percentagePlayed,
            userId: auth?._id,
            videoId: currentVideo?._id,
            isCompleted: true,
          },
          url: UPDATE_VIDEO_PROGRESS(),
        });
      }, 1000);

      setTimeoutId(id);
    }
  };

  return (
    <div>
      <TopBanner
        title="Recycling Courses"
        description="Select a video to watch"
      />

      <QuestionsModal
        openModal={openQuestionModal}
        closeModal={closeQuestionModal}
        hasAnswered={hasAnswered}
        setHasAnswered={setHasAnswered}
        questions={questionsCp}
        setQuestions={setQuestionsCp}
      />

      <div style={{ margin: "auto", width: "95%" }}>
        <Row>
          {/* Video Player */}
          <Col md="8">
            <div style={{ height: "30rem" }}>
              {!currentVideo.url ? (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <strong>No video to display yet</strong>
                </div>
              ) : (
                <ReactPlayer
                  url={currentVideo.url}
                  playing
                  controls
                  height="100%"
                  width="100%"
                  onProgress={handleProgress}
                  onEnded={() => {}}
                />
              )}
            </div>
          </Col>

          {/* Sidebar with video list + quiz */}
          <Col md="4">
            <div
              className="bg-white mt-3 px-2 py-2"
              style={{ height: "40rem", overflowY: "auto" }}
            >
              {questionsCp?.length > 0 && (
                <div className="my-2">
                  <Button
                    color="primary"
                    onClick={() => setOpenQuestionModal(true)}
                  >
                    {hasAnswered ? "View Answers" : "Take Quiz"}
                  </Button>
                </div>
              )}

              {isLoading ? (
                <MyLoader />
              ) : (
                videoData?.items?.map((video, index) => {
                  const isActive = currentVideo.url === video.videourl;
                  return (
                    <div
                      key={index}
                      className={`py-3 px-3 course-video ${
                        isActive ? "active-video" : ""
                      }`}
                      onClick={() =>
                        setCurrentVideo({
                          ...video,
                          indx: index,
                          url: video.videourl,
                          isCompleted: video?.progress?.isCompleted,
                        })
                      }
                      style={{
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="checkbox"
                          disabled
                          checked={video?.progress?.isCompleted}
                          style={{ height: "1rem", width: "1rem" }}
                        />
                        <div className="d-flex gap-2">
                          <div>{index + 1}.</div>
                          <div>{video.videoTitle}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);
