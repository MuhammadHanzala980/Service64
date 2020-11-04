import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Base64 } from 'js-base64';
// import { encode, decode } from 'js-base64';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upload_img } from "../../store/action";
import { storage } from "./Storage.js";
import imageCompression from "browser-image-compression";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 0,
  marginRight: 0,
  width: "100%",
  height: "auto",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  //   display: "flex",
  //   minWidth: 0,
  //   overflow: "hidden",
  //   alignItems: "start",
  width: "100%",
};

const img = {
  display: "block",
  width: "100%",
  height: "auto",
};

function PhotoUploader(props) {
  const [files, setFiles] = useState([]);
  const [progress, setProgres] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      var options = {
        maxSizeMB: 4,
        maxWidthOrHeight: 220,
        useWebWorker: true,
        fileType: "image/jpeg",
      };
      imageCompression(acceptedFiles[0], options)
        .then(function (compressedFile) {
          console.log(`compressedFile size ${compressedFile.size} B`)
          const uploadTask = storage
            .ref(`/images/${compressedFile.name}`)
            .put(compressedFile);

          uploadTask.on(
            "state_changed",
            (snapShot) => {
              const progress = Math.round(
                (snapShot.bytesTransferred / snapShot.totalBytes) * 100
              );
              setProgres(progress);
              console.log(progress);
            },
            (err) => {
              console.log(err);
            },
            () => {
              storage
                .ref("images")
                .child(acceptedFiles[0].name)
                .getDownloadURL()
                .then((fireBaseUrl) => {
                  props.actions.upload_img(fireBaseUrl);
                  setFiles(
                    acceptedFiles.map((file) => {
                      return Object.assign(file, {
                        preview: URL.createObjectURL(file),
                      });
                    })
                  );
                });
            }
          );
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          id="thumb-image"
          src={file.preview}
          style={img}
          alt="Author Profile"
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      let a = files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">Photo</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="drag-and-drop-wrap text-center">
                <div className="drag-and-drop-file">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <span className="drag-drop-icon">
                      {/* <BsCloudUpload /> */}
                    </span>
                    <h3>Drag & Drop Files Here to Upload</h3>
                    <Link to="#" className="drag-drop-btn">
                      Browse Files
                    </Link>
                  </div>
                  <progress value={progress} max="100" /> {progress + "%"}
                  <aside style={thumbsContainer}>{thumbs}</aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        upload_img,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploader);
