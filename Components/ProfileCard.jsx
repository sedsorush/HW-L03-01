/* eslint-disable react/prop-types */

const profileStyle = {
    padding: "10px",
    lineHeight: "20px",
    color: "#3f3f3f"
}

const ProfileCard = (props) => {
    return(
        <div className="profile"
            style={profileStyle}
        >
            Name: <strong>{props.name}</strong> <br></br>
            Title: {props.title} <br></br>
            Bio: {props.bio}
        </div>
    )
};

export default ProfileCard;