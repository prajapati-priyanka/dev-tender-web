import axios from "axios";
import { ConnectionCard } from "./ConnectionCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../redux/slices/connectionSlice";

export const Connections = () => {
    const connections = useSelector(store => store.connection);
  const dispatch = useDispatch();
  const getConnections = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/user/connections",
        { withCredentials: true }
      );
    //   console.log("CONNECTIONs REquest", response);
      dispatch(addConnection(response.data.data));
    } catch (error) {
      console.error("Error Occurred: ", error.message);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if(!connections) return;
  if(connections.length === 0) <h1>There is no Connections</h1>
  return (
    <>
      <ConnectionCard connection={connections}/>
    </>
  );
};
