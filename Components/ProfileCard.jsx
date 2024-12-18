/* eslint-disable react/prop-types */

import "./ProfileCard.css"

const ProfileCard = (props) => {
    return(
        <div className="profile">
            Name: <strong>{props.name}</strong> <br></br>
            Title: {props.title} <br></br>
            Bio: {props.bio}
        </div>
    )
};

export default ProfileCard;