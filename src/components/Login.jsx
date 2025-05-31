import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

export const Login = () => {
  const [email, setEmail] = useState("ankit@gmail.com");
  const [password, setPassword] = useState("Ankit@123");
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const LOGIN_URL = BASE_URL + "login"

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
      naviagte("/");
    } catch (error) {
      console.error("Error Occurred: ", error.message);
    }
  };

  return (
    <div className="flex justify-center mt-28">
      <div className="card card-border bg-base-100 w-96 border-inherit">
        <div className="card-body">
          <h2 className="card-title underline justify-center">Login</h2>
          <div>
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
                type="text"
                value={password}
                className="input"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
