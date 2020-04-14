import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      track_id: this.props.track.id,
      author_id: this.props.currentUser.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   debugger;
  //   if (this.props.track.id) {
  //     this.props.fetchTrackComments(this.props.track.id);
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.track.id !== this.props.track.id) {
      this.setState({ track_id: nextProps.track.id });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createComment(this.state).then(this.setState({ body: "" }));
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    if (!this.props.currentUser.id) return <></>;
    return (
      <section className="track-show-bottom-left-comment">
        <img src={this.props.currentUser.photoUrl} alt="" />
        <form onSubmit={this.handleSubmit}>
          <div id="comment-box">
            <input
              type="text"
              onChange={this.update("body")}
              placeholder="Write a comment"
              value={this.state.body}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default CommentForm;
