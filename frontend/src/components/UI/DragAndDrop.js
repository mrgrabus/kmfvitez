import { useEffect, useRef, useState } from "react";
import axios from "axios";

import upload from "../../assets/Img/upload.svg";
import styles from "./DragAndDrop.module.css";

const DragAndDrop = () => {
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setValidFiles([...filteredArr]);
  }, [selectedFiles]);

  const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  const dragOver = (e) => {
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    preventDefault(e);
  };

  const fileDrop = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage("File type not permitted");
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  };

  const fileSize = (size) => {
    if (size === 0) {
      return "0 Bytes";
    }
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
    const index = validFiles.findIndex((e) => e.name === name);
    const index2 = selectedFiles.findIndex((e) => e.name === name);
    const index3 = unsupportedFiles.findIndex((e) => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  const openImageModal = (file) => {
    const reader = new FileReader();
    modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    };
  };

  const uploadFiles = async () => {
    uploadRef.current.style.display = "block";
    uploadRef.current.innerHTML = "File(s) Uploading...";
    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData();
      formData.append("image", validFiles[i]);
      formData.append("key", "");
      formData.append("name", selectedFiles[0].name)
      axios
        .post("http://localhost:5000/api/news/upload", formData, {
          onUploadProgress: (progressEvent) => {
            const uploadPercentage = Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            progressRef.current.innerHTML = `${uploadPercentage}%`;
            progressRef.current.style.width = `${uploadPercentage}%`;

            if (uploadPercentage === 100) {
              uploadRef.current.innerHTML = "File(s) Uploaded";
              validFiles.length = 0;
              setValidFiles([...validFiles]);
              setSelectedFiles([...validFiles]);
              setUnsupportedFiles([...validFiles]);
            }
          },
        })
        .catch(() => {
          uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
          progressRef.current.style.backgroundColor = "red";
        });
    }
  };

  const closeUploadModal = () => {
    uploadModalRef.current.style.display = "none";
  };
  return (
    <>
      <div
        className={styles.dropContainer}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
      >
        <img src={upload} alt="upload" className={styles.upload} />
        <p className={styles.uploadText}>Drag and drop photos</p>
        <p className={styles.uploadInfo}>JPG and PNG images - max 2MB</p>
        <input
          ref={fileInputRef}
          className={styles.fileInput}
          type="file"
          multiple
          onChange={filesSelected}
        />
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
      <div className="d-flex justify-content-center">
        {unsupportedFiles.length === 0 && validFiles.length ? (
          <button
            className={styles.fileUploadBtn}
            onClick={() => uploadFiles()}
          >
            Upload Files
          </button>
        ) : (
          ""
        )}
        {unsupportedFiles.length ? (
          <p>Please remove all unsupported files.</p>
        ) : (
          ""
        )}
      </div>
      <div className={styles.progressContainer}>
        <span ref={uploadRef}></span>
        <div className={styles.progress}>
          <div className={styles.progressBar} ref={progressRef}></div>
        </div>
      </div>
      {/* <div className={styles.uploadModal} ref={uploadModalRef}>
        <div className={styles.overlay}></div>
        <div className={styles.close} onClick={() => closeUploadModal()}>
          X
        </div>
        
      </div> */}
    </>
  );
};

export default DragAndDrop;
