import { useLocation } from "react-router";

export const ConnectionCard = ({ connection }) => {
  const location = useLocation();

  const title = location.pathname === "/requests" ? "Requests" : "Connections";

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mt-10">
      <header>
        <h4 className="text-2xl">{title}</h4>
      </header>
      {connection.map((connection) => (
        <div className="card card-side bg-base-200 shadow-sm w-170">
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
                <button className="btn btn-secondary">Ignore</button>
                <button className="btn btn-primary">Accept</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
