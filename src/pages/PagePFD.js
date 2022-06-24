import React from "react";
import PBint from "../productPages/PBint";
import PFsa from "../productPages/PFsa";
import PVsa from "../productPages/PVsa";
import PHfsp from "../productPages/PHfsp";
import PFsbi from "../productPages/PFsbi";

import '../productPages/pageAndProductStyle.css'

const PagePFD = (props) => {
  const productIndex = props.productIndex;
  const inputValues = props.inputValues;
  const bintBGColor = props.bintBGColor;
  const isBlackText = props.isBlackText;

  const pfdFileError = props.pfdFileError
  const svgFileError = props.svgFileError
  const standardAdFileError = props.standardAdFileError

  const handlePFDDropzoneChanges = (name, value, droppedFileType) => {
    props.handleAllDropzoneChangesParent(name, value, droppedFileType);
  }

  return (
    <div className='pageContainer'>
      {productIndex === 0 ? <PBint
        pfdFileError={pfdFileError}
        standardAdFileError={standardAdFileError}
        isBlackText={isBlackText}
        bintBGColor={bintBGColor}
        handleAllDropzoneChangesParent={handlePFDDropzoneChanges}
        productIndex={productIndex}
      /> : null}
      {productIndex === 1 ? <PFsa
        pfdFileError={pfdFileError}
        handleAllDropzoneChangesParent={handlePFDDropzoneChanges}
        productIndex={productIndex}
      /> : null}
      {productIndex === 2 ? <PHfsp
        pfdFileError={pfdFileError}
        handleAllDropzoneChangesParent={handlePFDDropzoneChanges}
        productIndex={productIndex}
      /> : null}
      {productIndex === 3 ? <PVsa
        pfdFileError={pfdFileError}
        handleAllDropzoneChangesParent={handlePFDDropzoneChanges}
        productIndex={productIndex}
      /> : null}
      {productIndex === 4 ? <PFsbi
        pfdFileError={pfdFileError}
        svgFileError={svgFileError}
        handleAllDropzoneChangesParent={handlePFDDropzoneChanges}
        productIndex={productIndex}
      /> : null}


    </div>



  )
}

export default PagePFD;