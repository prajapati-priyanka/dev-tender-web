import { useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  //   const { firstName, lastName, about, gender, age, photoUrl } = user;

  //   console.log("EDITPROFILE", firstName);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const dispatch = useDispatch();
  const handleEditProfile = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/profile/edit",
        { firstName, lastName, about, gender, age, photoUrl },
        { withCredentials: true }
      );
    //   console.log("EDIT PROFILE RESPONSE", response);
      dispatch(response.data);
    } catch (error) {
      console.error("Error Occurred ", error.message);
    }
  };


  return (
    <div className="flex">
      <div className="flex justify-center my-15">
        <div className="card card-border bg-base-100 w-96 border-inherit">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="text"
                  value={age}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  type="text"
                  value={photoUrl}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  value={gender}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  value={about}
                  className="input"
                  placeholder="Type here"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleEditProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, about, gender, age }} />
    </div>
  );
};

export default EditProfile;
