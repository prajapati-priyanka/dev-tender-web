import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequests } from "../redux/slices/requestSlice";
import { ConnectionCard } from "./ConnectionCard";

export const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const getRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/user/requests/recieved",
        { withCredentials: true }
      );
      console.log("CONNECTIONs REquest", response);
      dispatch(addRequests(response.data.data));
    } catch (error) {
      console.error("Error Occurred: ", error.message);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) <h1>There is no Connections</h1>;
  return (
    <>
      <ConnectionCard connection={requests} />
    </>
  );
};
