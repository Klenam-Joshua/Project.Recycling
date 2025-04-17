import { Col, Row } from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import useFetch from "../../hooks/useFetch";

import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Education() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const _categories = [
    {
      name: "Recycling",
      id: 1,
    },
    {
      name: "E-waste",
      id: 2,
    },
    {
      name: "Environmental Impact",
      id: 3,
    },
  ];

  // const courses = [
  //   {
  //     name: "Basics of Recycling",
  //     id: 1,
  //     image: "",
  //   },
  //   {
  //     name: "E-waste management",
  //     id: 2,
  //     image: "",
  //   },
  //   {
  //     name: "E-waste management",
  //     id: 3,
  //     image: "",
  //   },
  // ];

  const { data: categories } = useFetch("category", ["categories"]);
  const { data: courses } = useFetch(`course?categoryId=${selectedCategory}`, [
    selectedCategory,
  ]);

  const handleNavigate = (id) => {
    navigate(`/courseDetails/${id}`);
  };
  return (
    <div>
      <TopBanner
        title="Recycling Courses"
        description="Select  a course category to filter"
      />
      <div>
        <div className="bg-white py-2 px-2 mr-0 ml-0   mt-3">
          <Row className="px-0 pl-0 pr-0">
            <Col md="3">
              <div>
                <select
                  className="form-control"
                  onChange={(e) => {
                    console.log({ e: e.target.value });
                    setSelectedCategory(e.target.value);
                  }}
                >
                  <option id="">All</option>
                  {categories?.items?.map((cat, id) => {
                    return (
                      <option value={cat._id} key={id}>
                        {cat.categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className=" mt-4">
        <Row className="px-2 ml-0 mr-0 pl-0 pr-0" id="courses_wrapper">
          {courses?.items?.map((course, indx) => {
            return (
              <Col key={indx} md="4" lg="4">
                <CourseCard
                  course={course}
                  image={""}
                  title={course.courseName}
                  id={indx}
                  handleNavigate={handleNavigate}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

const CourseCard = ({ course, image, title, id: indx, handleNavigate }) => {
  return (
    <div
      id={`card__${indx}`}
      onClick={() => {
        // eslint-disable-next-line react/prop-types
        handleNavigate(course?._id);
      }}
    >
      <Card
        className="course__card"
        style={{
          cursor: "pointer",
        }}
      >
        <CardBody>
          <CardImg src={image}></CardImg>
        </CardBody>
        <div className="pl-2"></div>
        <CardFooter className="border-0">
          <div className="d-flex  justify-content-between">
            <CardTitle className=" pl-2">
              <h5
                className="pl-3"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                {title}
              </h5>
            </CardTitle>
            <div>
              <span></span>
            </div>
          </div>
        </CardFooter>
        <UncontrolledTooltip placement="right" target={`card__${indx}`}>
          {`${title}`}
        </UncontrolledTooltip>
      </Card>
    </div>
  );
};
