import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import UploadMenu from "./upload_menu";
import Upload from "./upload";
import UploadDetail from "./upload_detail";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      description: "",
      status: "none",
      trackFile: null,
      trackUrl: null,
      photoFile: null,
      photoUrl: null,
    };

    this.update = this.update.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // NEED TO SET ALLOWED FILE TYPES FOR BOTH TRACK/ALBUM ART
  // NEED TO WORK ON CSS STYLING FOR BOTH UPLOAD1/UPLOAD2 PAGES
  // UPLOAD POPUP IS OPENING TWICE SOMETIMES, NEED TO SEE WHY

  handleUpload(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    if (file) {
      fileReader.readAsDataURL(file);
      if (file.type === "audio/mpeg") {
        debugger;
        fileReader.onloadend = () => {
          this.setState({
            title: file.name,
            trackFile: file,
            trackUrl: fileReader.result.data,
            status: "loaded",
          });
        };
      } else {
        debugger;
        fileReader.onloadend = () => {
          this.setState({
            title: file.name,
            photoFile: file,
            photoUrl: fileReader.result.data,
          });
        };
      }
    } else {
      this.setState({ trackFile: null, trackUrl: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, genre, description, trackFile, photoFile } = this.state;
    const formData = new FormData();

    formData.append("track[title]", title);
    formData.append("track[genre]", genre);
    formData.append("track[description]", description);
    formData.append("track[artist_id]", this.props.currentUser.id);
    formData.append("track[track]", trackFile);
    formData.append("track[photo]", photoFile);
    this.props.createVideo(formData);
  }

  findFileInput() {
    document.getElementById("file").click();
  }

  handleCancel(e) {
    debugger;
    this.setState({ status: "none" });
  }

  render() {
    return (
      <div className="upload-main-content-wrapper">
        <div className="upload-main-nav-bar">
          <NavBarContainer />
        </div>
        <div className="upload-main-container">
          <div className="upload-main-menu-bar">
            <UploadMenu />
          </div>
          <div className="upload-main-content">
            {this.state.status === "none" ? (
              <Upload
                findFileInput={this.findFileInput}
                handleUpload={this.handleUpload}
              />
            ) : (
              <UploadDetail
                title={this.state.title}
                findFileInput={this.findFileInput}
                handleUpload={this.handleUpload}
                update={this.update}
                handleSubmit={this.handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UploadForm;
