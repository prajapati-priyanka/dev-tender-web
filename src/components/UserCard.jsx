import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../redux/slices/feedSlice";


export const UserCard = (props) => {
  const { _id, firstName, lastName, photoUrl, about, gender, age } = props.user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(`${BASE_URL}request/send/${status}/${userId}`, {},{withCredentials:true});
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.error("Error Occurred ", error.message);
    }
  };

  return (
    <div className="card bg-base-200 w-96 shadow-sm my-15">
      <figure>
        <img src={photoUrl} alt="photos" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <div className="flex gap-2">
          {age && <span>{age}</span>}
          {gender && <span>{gender}</span>}
        </div>

        <p>{about}</p>
        <div className="card-actions justify-center my-5">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignored
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
