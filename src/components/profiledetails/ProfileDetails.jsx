import React from 'react'
import './profiledetails.css';
import image from '../../assets/profilepic.jpg';

const ProfileDetails = () => {
  return (
    <div className='profile__details'>
      {/* Profile Image */}
      <div className='profile__details-img'>
        <img id='profile__img' src={image} alt="Godswill Akpan" />
      </div>

      {/* Profile Name */}
      <div className='profile__details-name'>
        <h1>@GeeAkpan</h1>
        <p id='slack'>Slack Id: GeeAkpan</p>
      </div>

    </div>
  )
}

export default ProfileDetails;