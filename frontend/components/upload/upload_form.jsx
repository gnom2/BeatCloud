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
      trackUrl: "",
      photoFile: null,
      photoUrl: "",
    };

    this.update = this.update.bind(this);
    this.handleTrackUpload = this.handleTrackUpload.bind(this);
    this.handlePicUpload = this.handlePicUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleTrackUpload(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          title: file.name,
          trackFile: file,
          trackUrl: reader.result,
          status: "loaded",
        });
        debugger;
      };
    } else {
      this.setState({ trackFile: null, trackUrl: null });
    }
  }

  handlePicUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    debugger;
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          photoFile: file,
          photoUrl: reader.result,
        });
      };
    } else {
      this.setState({ photoFile: null, photoUrl: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, genre, description, trackFile, photoFile } = this.state;
    const formData = new FormData();

    formData.append("track[title]", title);
    formData.append("track[genre]", genre);
    formData.append("track[description]", description);
    formData.append("track[artist_id]", this.props.currentUserId);
    formData.append("track[track]", trackFile);
    formData.append("track[photo]", photoFile);
    this.props.uploadTrack(formData).then(({ track }) => {
      this.props.history.push(`/tracks/${track.track.id}`);
    });
  }

  findFileInput() {
    document.getElementById("file").click();
  }

  handleCancel(e) {
    this.setState({
      title: "",
      genre: "",
      description: "",
      status: "none",
      trackFile: null,
      trackUrl: "",
      photoFile: null,
      photoUrl: "",
    });
  }

  render() {
    debugger;
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
            <div id="filler" />
            {this.state.status === "none" ? (
              <Upload
                findFileInput={this.findFileInput}
                handleTrackUpload={this.handleTrackUpload}
              />
            ) : (
              <UploadDetail
                title={this.state.title}
                findFileInput={this.findFileInput}
                handlePicUpload={this.handlePicUpload}
                update={this.update}
                handleSubmit={this.handleSubmit}
                handleCancel={this.handleCancel}
                preview={this.state.photoUrl}
                errors={this.props.errors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UploadForm;
