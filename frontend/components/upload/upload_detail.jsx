import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UploadDetail = ({
  findFileInput,
  handlePicUpload,
  handleSubmit,
  handleCancel,
  update,
  title,
}) => {
  return (
    <>
      <div className="upload-main-body">
        <div className="upload-main-body-container">
          <div className="upload-main-body-album">
            <div className="upload-main-body-album-preview">
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
                    <option value="custom" onChange={update("genre")}>
                      Custom
                    </option>
                    <option value="alt-rock" onChange={update("genre")}>
                      Alternative Rock
                    </option>
                    <option value="ambient" onChange={update("genre")}>
                      Ambient
                    </option>
                    <option value="classical" onChange={update("genre")}>
                      Classical
                    </option>
                    <option value="country" onChange={update("genre")}>
                      Country
                    </option>
                    <option value="edm" onChange={update("genre")}>
                      Dance & EDM
                    </option>
                    <option value="dancehall" onChange={update("genre")}>
                      Dancehall
                    </option>
                    <option value="deephouse" onChange={update("genre")}>
                      Deep House
                    </option>
                    <option value="disco" onChange={update("genre")}>
                      Disco
                    </option>
                    <option value="dnb" onChange={update("genre")}>
                      Drum & Bass
                    </option>
                    <option value="dubstep" onChange={update("genre")}>
                      Dubstep
                    </option>
                    <option value="electronic" onChange={update("genre")}>
                      Electronic
                    </option>
                    <option value="folk" onChange={update("genre")}>
                      Folk & Singer-Songwriter
                    </option>
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
            </div>
          </div>
        </div>
        <div className="upload-main-footer">
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
              className="upload-main-body-upload-btn"
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
