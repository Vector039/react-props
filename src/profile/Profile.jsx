import React from 'react'
import Image from './pexels-amr-osman-10665370.jpg' 

const Profile = ({fullName, bio, profession}) => {

    const handleName = () => {
        alert('Emmanuel Ogbonnaya Nwafor')
    };

  return (
    <div className='container'>
        <img src={Image}/>
        <div className="description-container">
            <p><span>full name: </span>{fullName}</p>
            <p><span>profession: </span>{profession}</p>
            <p><span>biography: </span>{bio}</p>
        </div>
        <button onClick={handleName} className="button-container">
            Send
        </button>
    </div>
  )
};

Profile.defaultProps = {
    fullName: 'Emmanuel',
    bio: 'Nothing',
    profession: 'Empty'
}

export default Profile