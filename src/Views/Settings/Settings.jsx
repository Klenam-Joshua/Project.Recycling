import TopBanner from "../../Layout/TopBanner/TopBanner";
import { Formik } from "formik";
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";
import { useAuth } from "../../hooks/useAuth";

export default function Settings() {
  const { auth } = useAuth();
  console.log({ auth });
  return (
    <div>
      <TopBanner title="Profile Settings" />

      <div
        className="py-3 "
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "2rem",
          minHeight: "24rem",
          background: "white",
        }}
      >
        <div
          style={{
            width: "50%",
            margin: "auto",
            // marginTop: "2rem",
            // height: "24rem",
            // background: "white",
          }}
        >
          <Formik
            initialValues={{
              userName: auth?.userName,
              email: auth?.email,
              firstName: auth?.firstName,
              lastName: auth.lastName,
              oldPassword: "",
              password: "",
              passwordConfirm: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.userName) {
                errors.userName = "Required";
              }

              if (!values.password) {
                errors.password = "Required";
              }

              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              }

              if (values.password !== values.confirmPassword) {
                errors.confirmPassword =
                  "confirm password and password must match";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // handleLogin(values);
              resetForm();
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                {/* 
                 firstName,
        lastName,
        userName,
        role,
        email,
        password,
        passwordConfirm,
          
          
          */}

                <Row>
                  <Col md="6" lg="6">
                    <Label>First Name</Label>
                    <input
                      disabled
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className="form-control"
                      placeholder="Enter first name"
                      required
                    />

                    <span className="text-danger">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </span>
                  </Col>
                  <Col md="6" lg="6">
                    <Label>Last Name</Label>
                    <input
                      disabled
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className="form-control"
                      placeholder="Enter last name"
                      required
                    />

                    <span className="text-danger">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" lg="12">
                    <Label>User Name</Label>

                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                      name="userName"
                      className="form-control"
                      placeholder="Enter your user name"
                      required
                    />
                    <span className="text-danger">
                      {errors.userName && touched.userName && errors.userName}
                    </span>
                  </Col>

                  <Col md="12" lg="12">
                    <Label>Email</Label>

                    <input
                      disabled
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      required
                    />
                    <span className="text-danger">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" lg="6">
                    <Label>Current Password</Label>
                    <input
                      type="password"
                      name="oldPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.oldPassword}
                      className="form-control"
                      placeholder="Enter current password"
                      required
                    />

                    <span className="text-danger">
                      {errors.oldPassword &&
                        touched.oldPassword &&
                        errors.oldPassword}
                    </span>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md="6" lg="6">
                    <Label>New Password</Label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />

                    <span className="text-danger">
                      {errors.password && touched.password && errors.password}
                    </span>
                  </Col>
                  <Col md="6" lg="6">
                    <Label>Repeat New Password</Label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      className="form-control"
                      placeholder="Repeat password"
                      required
                    />

                    <span className="text-danger">
                      {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                    </span>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md="">
                    <Button
                      className="w-100"
                      style={{ display: "block" }}
                      type="submit"
                      // disabled={isLoading}
                    >
                      Update
                    </Button>
                  </Col>
                </Row>

                {/* <div className={style.diver}>
                    <span>OR</span>
                  </div> */}

                {/* <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button> */}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
