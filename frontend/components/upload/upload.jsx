import React from "react";

const Upload = ({ findFileInput, handleTrackUpload }) => {
  return (
    <div className="upload-main-container">
      <div className="upload-main-body">
        <div className="upload-main-body-header">
          <h1>Choose a track to upload to BeatCloud</h1>
        </div>
        <button className="upload-main-body-upload-btn" onClick={findFileInput}>
          Click to upload
          <input
            type="file"
            id="file"
            accept={"audio/mpeg"}
            onChange={handleTrackUpload}
          />
        </button>
        <div className="upload-main-body-info">
          <p>
            Please provide MP3 in order to upload. <br />
            More file types to be supported later.
          </p>
        </div>
        <div className="upload-main-footer">
          <div className="upload-main-footer-info">
            <a href="https://help.soundcloud.com/hc/articles/115003452847-Uploading-requirements#typeOfFile">
              Learn more about lossless HD.
            </a>
          </div>
        </div>
      </div>
      <div className="upload-footer">
        <div id="upload-footer-top">
          <a href="">
            Supported file types and sizes - Upload troubleshooting tips -
            Copyright FAQs
          </a>
          <p>
            By uploading, you confirm that your sounds comply with our{" "}
            <a href="">Terms of Use</a> and you don't infringe anyone else's
            rights.
          </p>
        </div>
        <div id="upload-footer-bottom">
          <p>
            Legal - Privacy - Cookies - Imprint - Creator Resources - Blog -
            Charts - Popular searches
          </p>
          <p>
            <a href="">Language:</a> English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
