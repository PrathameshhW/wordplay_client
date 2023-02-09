import React, { useState, useEffect } from "react";
import FormRow from "./FormRow";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center h-screen items-center text-center p-2 bg-gray">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/4 bg-indigo-500 h-3/4 justify-center gap-2 p-6 items-center"
      >
        <h3 className="uppercase text-3xl text-white border-b-2">
          {values.isMember ? "Login" : "Register"}
        </h3>

        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="uppercase bg-white p-2 my-4"
        >
          submit
        </button>

        <p className="flex justify-center gap-4 bg-white uppercase p-1 items-center">
          {!values.isMember ? "Already a member?" : "Not a member yet ?"}
          <button
            type="button"
            onClick={toggleMember}
            className="uppercase border-2 p-2"
          >
            {!values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
