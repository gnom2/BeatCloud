import React from "react";
import { Link } from "react-router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.track) {
      this.props.fetchTrack(nextProps.track.id);
    }
  }

  handleDelete(e) {
    // debugger;
    this.props
      .deleteComment(parseInt(e.currentTarget.value))
      .then(this.setState({ state: this.state }));
  }

  render() {
    const { comments, currentUser } = this.props;

    const commentLi = comments.map((comment) => {
      //   debugger;
      if (comment.author.username === currentUser.username) {
        return (
          <li key={comment.id} className="comment-item">
            <div className="comment-profile-icon"></div>

            <div className="comment-content">
              <div className="comment-content-top">
                <span>{comment.author.username}</span>
                <span>{comment.created_at.to_f}</span>
              </div>

              <div className="comment-content-body">
                <span>{comment.body}</span>
                <button
                  className="trash-button"
                  value={comment.id}
                  onClick={this.handleDelete}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={comment.id} className="comment-item">
            <div className="comment-profile-icon"></div>

            <div className="comment-content">
              <div className="comment-content-top">
                <span>{comment.author.username}</span>
                <span>{comment.created_at}</span>
              </div>

              <div className="comment-content-body">
                <span>{comment.body}</span>
                <span></span>
              </div>
            </div>
          </li>
        );
      }
    });
    // debugger;
    return <ul className="comment-list">{commentLi}</ul>;
  }
}

export default CommentItem;
//   comment.author.username === currentUser.username ? (
//     <li key={comment.id} className="comment-item">
//       <div className="comment-profile-icon"></div>

//       <div className="comment-content">
//         <div className="comment-content-top">
//           <span>{comment.author.username}</span>
//           <span>{comment.created_at.to_f}</span>
//         </div>

//         <div className="comment-content-body">
//           <span>{comment.body}</span>
//           <button className="trash-button" onClick={this.handleDelete}>
//             <FontAwesomeIcon icon={faTrash} />
//           </button>
//         </div>
//       </div>
//     </li>
//   ) : (
//     <li key={comment.id} className="comment-item">
//       <div className="comment-profile-icon"></div>

//       <div className="comment-content">
//         <div className="comment-content-top">
//           <span>{comment.author.username}</span>
//           <span>{comment.created_at}</span>
//         </div>

//         <div className="comment-content-body">
//           <span>{comment.body}</span>
//           <span></span>
//         </div>
//       </div>
//     </li>
//   );
