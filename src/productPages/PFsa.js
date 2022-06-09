import React from "react";
import "./pageAndProductStyle.css";
import Dropzone from "../Dropzone";
import background from "../assets/pfsa.png";

const P_fsa = (props) => {
  const handleAllDropzoneChanges = (name, value) => {
    props.handleAllDropzoneChangesParent(name, value);
  };
  const pFullScreen = {
    width: "99%",
    height: "74%",
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "100"
  };

  return (
    <div className="portraitProductContainer">
      <img alt="" className="backgroundImageContainer" src={background}></img>
      <div style={pFullScreen}>
        <Dropzone
          handleAllDropzoneChanges={handleAllDropzoneChanges}
          droppedFile={props.droppedFile}
          productIndex={props.productIndex}
          droppedFileType="portrait"
        />
      </div>
    </div>
  );
};

export default P_fsa;
