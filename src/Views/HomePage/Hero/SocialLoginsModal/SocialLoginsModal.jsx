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

import { useAuth } from "../../../../hooks/useAuth";
import LoginItems from "./LoginItems";
import style from "./socialLoginModal.module.css";

import toast from "react-hot-toast";

import { Formik } from "formik";
import { usePost } from "../../../../hooks/usePost";

import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { error } from "console";
// prop

export default function SocialLoginsModal({ open, handleCloseModal }) {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const onSuccess = (data) => {
    try {
      const user = jwtDecode(data?.token);
      setAuth({ ...user, token: data?.token });
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/dashboard");
      // console.log({ user });
    } catch (error) {
      console.log({ error });
    }
  };

  const onError = (error) => {
    if (error.status == 401) {
      return toast.error("Invalid email or password ");
    }

    return toast.error("Something went wrong");
  };
  const { mutate, isLoading } = usePost(onSuccess, onError);
  const handleLogin = (formData) => {
    mutate({
      data: { password: formData.password, email: formData.email },
      url: "auth/login",
    });
  };
  return (
    <div>
      <Modal unmountOnClose isOpen={open}>
        <ModalHeader className="bg-primary  text-white">
          {isLogin ? "Login" : "Sign up"}
        </ModalHeader>
        <ModalBody>
          {isLogin ? (
            <div className={style.container}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin(values);
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
                    <Row>
                      <Col md="12" lg="12">
                        <Label>Email</Label>

                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Enter email"
                          required
                        />
                        <span className="text-danger">
                          {errors.email && touched.email && errors.email}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col md="12" lg="12">
                        <Label>Password</Label>
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col md="">
                        <Button
                          className="w-100"
                          style={{ display: "block" }}
                          type="submit"
                          disabled={isLoading}
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <div
                          className="d-flex "
                          style={{
                            gap: "1rem",
                          }}
                        >
                          <span>Don&apos;t have an account?</span>
                          <span
                            className="text-info"
                            style={{
                              cursor: "pointer",
                            }}
                            role="btn"
                            onClick={() => {
                              setIsLogin(false);
                            }}
                          >
                            Sign up
                          </span>
                        </div>
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
          ) : (
            <SignUpModal setIsLogin={setIsLogin} isLogin={isLogin} />
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="text-white"
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const SignUpModal = ({ setIsLogin }) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const onSuccess = (data) => {
    toast.success("Account created successfully, login you in...");
    try {
      const user = jwtDecode(data?.token);
      setAuth({ ...user, token: data?.token });
      localStorage.setItem("token", JSON.stringify(data.token));

      const id = setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      setTimeoutId(id);
    } catch (error) {
      console.log({ error });
    }
  };
  //

  const onError = () => {
    toast.error(
      "There was a problem creating the account, please try again later!"
    );
  };
  const { mutate, isLoading } = usePost(onSuccess, onError);
  const handleLogin = (formData) => {
    const { password, email, firstName, lastName, confirmPassword, userName } =
      formData;
    mutate({
      data: {
        password,
        email,
        firstName,
        lastName,
        passwordConfirm: confirmPassword,
        userName,
      },
      url: "users",
    });
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
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

        if (!values.firstName) {
          errors.firstName = "Required";
        }

        if (!values.lastName) {
          errors.lastName = "Required";
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
          errors.confirmPassword = "confirm password and password must match";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleLogin(values);
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
                {errors.firstName && touched.firstName && errors.firstName}
              </span>
            </Col>
            <Col md="6" lg="6">
              <Label>Last Name</Label>
              <input
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
          <Row className="mt-2">
            <Col md="6" lg="6">
              <Label>Password</Label>
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
              <Label>Repeat Password</Label>
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
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : " Sign up"}
              </Button>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <div
                className="d-flex "
                style={{
                  gap: "1rem",
                }}
              >
                <span>Already have an account?</span>
                <span
                  className="text-primary d-inline-block pl-2 ml-2"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsLogin(true);
                  }}
                >
                  Login
                </span>
              </div>
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
  );
};
