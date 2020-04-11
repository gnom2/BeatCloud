import React from "react";

const Upload = ({ findFileInput, handleTrackUpload }) => {
  return (
    <>
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
            Provide FLAC, WAV, ALAC, or AIFF <br />
            for highest audio quality.
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
    </>
  );
};

export default Upload;
