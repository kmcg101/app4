import React from "react";
import "./pageAndProductStyle.css";
import Dropzone from "../Dropzone";
import background from "../assets/lhfsp.png";
import DROPZONE_DATA from "../DROPZONE_DATA";

const L_hfsp = (props) => {
  const lHalfScreen = {
    position: "absolute",
    left: "279px",
    top: "22px",
    width: "982px",
    height: "433px",
    zIndex: "100",
  };

  const lfdFileError = props.lfdFileError;

  const handleDropzoneChanges = (name, value, droppedFileType) => {
    props.handleDropzoneChanges(name, value, droppedFileType);
  };
  return (
    <div className="landscapeProductContainer">
      <img alt="" className="backgroundImageContainer" src={background}></img>
      <div class="lHFSPImage" style={lHalfScreen}>
        <Dropzone
          acceptedFileTypeString={DROPZONE_DATA.data.imageAndVideo}
          handleDropzoneChanges={handleDropzoneChanges}
          droppedFileType="landscape"
        />
      </div>
    </div>
  );
};

export default L_hfsp;
