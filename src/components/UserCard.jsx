export const UserCard = (props) => {
  const { firstName, lastName, photoUrl, about, gender, age } = props.user;
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
          <button className="btn btn-secondary">Ignored</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};
