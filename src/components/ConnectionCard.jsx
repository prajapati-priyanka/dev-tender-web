export const ConnectionCard = ({ connection }) => {

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mt-10">
      <header>
        <h4 className="text-2xl">Connections</h4>
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
            {/* <div className="card-actions justify-end">
   <button className="btn btn-primary">Watch</button>
 </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};
