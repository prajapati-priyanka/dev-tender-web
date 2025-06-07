import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LOGIN_URL = BASE_URL + "login";
  const SIGNUP_URL = BASE_URL + "signup";

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(response.data.data));
      navigate("/");
    } catch (error) {
      console.error("Error Occurred: ", error.message);
    }
  };

  const handleSignUp = async () => {
    // signup code will be return here
    try {
      const response = await axios.post(
        SIGNUP_URL,
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(response.data.data));
      navigate("/profile");
    } catch (error) {
      console.error("Error Occurred: ", error.message);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="card card-border bg-base-100 w-96 border-inherit">
        <div className="card-body">
          <h2 className="card-title underline justify-center">
            {isLoginPage ? "Login" : "Signup"}
          </h2>
          <div>
            {!isLoginPage && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">last Name</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </fieldset>
              </>
            )}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                value={email}
                className="input"
                placeholder="Type here"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginPage ? handleLogin : handleSignUp}
            >
              {isLoginPage ? "Login" : "SignUp"}
            </button>
          </div>
          <div className="text-center">
            <p
              className="cursor-pointer"
              onClick={() => setIsLoginPage((prevVal) => !prevVal)}
            >
              {isLoginPage
                ? "New User? Signup Here"
                : "Existing User? Login Here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
