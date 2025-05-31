import { Outlet, useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import { BASE_URL } from "../utils/constants";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const PROFILE_URL = BASE_URL + "profile/view";

  const fetchUser = async () => {
    if (user) return;
    try {
      const response = await axios.get("PROFILE_URL", {
        withCredentials: true,
      });

      if (response.status === 200) {
        dispatch(addUser(response));
      }
      dispatch(addUser(response.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      // console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
