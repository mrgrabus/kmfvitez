import { useState } from "react";

import upload from "../../assets/Img/upload.svg";
import styles from "./DragAndDrop.module.css";

const DragAndDrop = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };
  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };
  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray) => [files[i]]);
      } else {
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage("File type not permitted");
      }
    }
  };
  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };
  const removeFile = (name) => {
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
  };
  return (
    <>
      <div
        className={styles.dropContainer}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <img src={upload} alt="upload" className={styles.upload} />
        <p className={styles.uploadText}>Drag and drop photos</p>
        <p className={styles.uploadInfo}>JPG and PNG images - max 2MB</p>
      </div>
      <div className={styles.fileDisplayContainer}>
        {selectedFiles.map((data, i) => (
          <div className={styles.fileStatusBar} key={i}>
            <div>
              <div className={styles.fileTypeLogo}></div>
              <div className={styles.fileType}>{fileType(data.name)}</div>
              <span
                className={`${styles.fileName} ${
                  data.invalid ? styles.fileError : " "
                }`}
              >
                {data.name}
              </span>
              <span className={styles.fileSize}>({fileSize(data.size)})</span>{" "}
              {data.invalid && (
                <span className={styles.fileErrorMessage}>
                  ({errorMessage})
                </span>
              )}
            </div>
            <div
              className={styles.fileRemove}
              onClick={() => removeFile(data.name)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DragAndDrop;
