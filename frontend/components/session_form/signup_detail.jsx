import React from "react";

class SignupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        age: "",
        gender: "",
        description: "",
        status: "none",
        photoFile: null,
        photoUrl: "",
    }

    this.handlePicUpload = this.handlePicUpload.bind(this);
  }

  handlePicUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

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
    const { age, gender, description, photoFile } = this.state;
    const formData = new FormData();

    formData.append("user[age]", age);
    formData.append("user[gender]", gender);
    formData.append("user[description]", description);
    formData.append("user[photo]", photoFile);
    this.props.signup(formData).then(({ user }) => {
      this.props.history.push(`/users/${track.track.id}`);
    });
  }

  render() {
    return (
        <>

        </>
    );
  }
}

export default SignupDetail;
