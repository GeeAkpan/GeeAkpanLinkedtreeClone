import React from "react";
import myprofile from "../assets/Profile.jpg"

const Profile = () => {
  return (
    <div className="main__content">
      <img src={myprofile} id="profile__img" className="profile" alt="Godswill Akpan" />
      <h1 id="twitter">GeeAkpan</h1>
      <h1 id="slack" className="hidden">GeeAkpan</h1>
    </div>
  );
};

export default Profile;
