import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "./UserCard";
import { addFeed } from "../redux/slices/feedSlice";

export const Feed = () => {
  const feed = useSelector(state => state.feed);
  const dispatch = useDispatch();
  const FEED_URL = BASE_URL + "user/feed";


  const getUsers = async () => {
    if(feed) return;
    try {
      const response = await axios.get(FEED_URL, { withCredentials: true });
      dispatch(addFeed(response.data))
    } catch (error) {
      console.error("ERROR OCCURRED: " + error.message);
    }
   
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <>
  {feed && <UserCard user = {feed[0]} />}
  </>
};
