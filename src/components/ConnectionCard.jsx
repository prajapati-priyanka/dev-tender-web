import axios from "axios";
import { useLocation } from "react-router";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { rejectRequest } from "../redux/slices/requestSlice";

export const ConnectionCard = ({ connection }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const title = location.pathname === "/requests" ? "Requests" : "Connections";


  const reviewRequests = async (status, requestId)=>{
    try {
      await axios.post(`${BASE_URL}request/review/${status}/${requestId}`,{},{withCredentials:true});
      // console.log("Request Accepted", response);
    
      dispatch(rejectRequest(requestId));
    } catch (error) {
      console.error("Error Occurred", error.message);
    }
  }
  if (!connection) return;
  if (connection.length === 0)return( <h1 className="text-2xl flex justify-center mt-40">There is no {title}</h1>);


  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mt-10">
      <header>
        <h4 className="text-2xl">{title}</h4>
      </header>
      {connection.map((connection) => (
        <div key={connection._id}className="card card-side bg-base-200 shadow-sm w-170">
          <figure className="w-35">
            <img src={connection.fromUserId.photoUrl} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {connection.fromUserId.firstName} {connection.fromUserId.lastName}
            </h2>
            <p>
              {connection.fromUserId.age} {connection.fromUserId.gender}
            </p>
            <p>{connection.fromUserId.about}</p>
            {location.pathname === "/requests" && (
              <div className="card-actions justify-end">
                <button className="btn btn-secondary" onClick={()=> reviewRequests("rejected",connection._id)}>Ignore</button>
                <button className="btn btn-primary" onClick={()=> reviewRequests("accepted", connection._id)}>Accept</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
