import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
  }
}

const UploadDetail = ({
  findFileInput,
  handlePicUpload,
  handleSubmit,
  handleCancel,
  update,
  title,
  preview,
  errors,
}) => {
  debugger;
  return (
    <>
      <div className="upload-main-body">
        <div className="upload-main-body-container">
          <div className="upload-main-body-album">
            <div className="upload-main-body-album-preview">
              <img src={preview} alt="" onClick={findFileInput} />
              <button
                className="upload-main-pic-upload-btn"
                onClick={findFileInput}
              >
                <FontAwesomeIcon id="pic-icon" icon={faCamera} />
                Upload image
                <input type="file" id="file" onChange={handlePicUpload} />
              </button>
            </div>
          </div>
          <div className="upload-main-body-wrapper">
            <div className="upload-main-body-title">
              <h2>
                Title<span>*</span>
              </h2>
              <input
                type="text"
                placeholder={title}
                onChange={update("title")}
                value={title}
              />
            </div>
            <div className="upload-main-body-content">
              <div className="upload-main-genre">
                <div className="main-genre-radio">
                  <h2>Genre</h2>
                  <select name="genres" id="genres" defaultValue="none">
                    <option value="none">None</option>
                    <option value="custom">Custom</option>
                    <option value="alt-rock">Alternative Rock</option>
                    <option value="ambient">Ambient</option>
                    <option value="classical">Classical</option>
                    <option value="country">Country</option>
                    <option value="edm">Dance & EDM</option>
                    <option value="dancehall">Dancehall</option>
                    <option value="deephouse">Deep House</option>
                    <option value="disco">Disco</option>
                    <option value="dnb">Drum & Bass</option>
                    <option value="dubstep">Dubstep</option>
                    <option value="electronic">Electronic</option>
                    <option value="folk">Folk & Singer-Songwriter</option>
                  </select>
                </div>
                <div id="custom-genre">
                  <h2>Custom Genre</h2>
                  <input
                    type="text"
                    placeholder=""
                    onChange={update("genre")}
                  />
                </div>
              </div>
              <div className="upload-main-description">
                <h2>Description</h2>
                <textarea
                  placeholder="Describe your track"
                  onChange={update("description")}
                />
              </div>
              <ul className="upload-form-errors"></ul>
            </div>
          </div>
        </div>
        <div className="upload-main-detail-footer">
          <div className="upload-main-footer-info">
            <h2>
              <span>*</span>Required field
            </h2>
          </div>
          <div className="upload-main-footer-btn">
            <button className="track-cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="upload-main-body-upload-save-btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDetail;
