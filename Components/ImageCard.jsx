/* eslint-disable react/prop-types */

const imageStyle = {
    height: "300px",
    width: "300px",
    alignSelf: "center",
    paddingBottom: "15px",
}

const ImageCard = (props) => {

    return(
        <img className="image01"
        style={imageStyle}
        src= {props.source} 
        alt= {props.altLink} />
    )
};

export default ImageCard;