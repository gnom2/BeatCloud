import React from "react";
import {
  faChartBar,
  faUserFriends,
  faRedo,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let users = [
      {
        username: "Sera C (ㅇㅅㅇ)",
        photoUrl: "https://i.imgur.com/Iy7xy2y.jpg",
        trackCount: "4",
        followers: "122",
      },
      {
        username: "d y L e",
        photoUrl:
          "https://i1.sndcdn.com/artworks-wALbsyk7vNXbXIfR-LPqP3A-t500x500.jpg",
        trackCount: "18",
        followers: "419",
      },
      {
        username: "taesty",
        photoUrl:
          "https://i1.sndcdn.com/avatars-000038214920-6dn32m-t500x500.jpg",
        trackCount: "23",
        followers: "9001",
      },
    ];

    const userLi = users.map((user, i) => {
      return (
        <div key={i} className={`side-user-follow`}>
          <img id="side-user-pic" src={user.photoUrl} alt="" />

          <div className="side-user-info">
            <div id="side-user-info-top">{user.username}</div>

            <div id="side-user-info-bottom">
              <div>
                <span>
                  <FontAwesomeIcon icon={faUserFriends} />
                  <p>{user.followers}</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faChartBar} />
                  <p>{user.trackCount}</p>
                </span>
              </div>
              <div>
                <button>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <p>Follow</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section className="side-content-container">
        <div className="side-top-content">
          <div className="stats-title-format">
            <span className="title-format">
              <div className="title-icon">
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              Stats
            </span>
            <span className="title-format">View all</span>
          </div>
          <div className="side-top-info">
            <div className="side-stats">
              <div id="side-stats-left">
                <h3 id="left-stats">Plays last 24 hours</h3>
                <span id="left-num">352</span>
              </div>
              <div id="side-stats-right">
                <h3 id="right-stats">Plays last 7 days</h3>
                <span id="right-num">1953</span>
              </div>
            </div>

            <div className="side-stats-total">
              <h3>103.5K plays in total</h3>
            </div>
          </div>
        </div>
        <div className="side-middle-content">
          <div className="stats-title-middle">
            <span className="title-format">
              <div className="title-icon">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              Who to follow
            </span>
            <span className="title-format">
              <div className="title-icon">
                <FontAwesomeIcon icon={faRedo} />
              </div>
              Refresh
            </span>
          </div>
          <div className="side-middle-info">{userLi ? userLi : null}</div>
        </div>
        <div className="side-bottom-content"></div>
      </section>
    );
  }
}

export default Sidebar;

// const Sidebar = (props) => {
//   let trackCount;
//   debugger;
//   if (this.props.users) {
//     const userLi = Object.values(this.props.users).map((user, i) => {
//       trackCount = Object.values(user.tracks).length;

//       return (
//         <div key={user.id} className={`side-user-follow${i}`}>
//           <img id="side-user-pic" src={user.photoUrl} alt="" />

//           <div className="side-user-info">
//             <div id="side-user-info-top">{user.username}</div>

//             <div id="side-user-info-bottom">
//               <span>
//                 <FontAwesomeIcon icon={faUserFriends} />
//                 <p>{Math.floor(Math.random() * 500)}</p>
//               </span>
//               <span>
//                 <FontAwesomeIcon icon={faChartBar} />
//                 <p>{trackCount}</p>
//               </span>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   }

//   return (
//     <section className="side-content-container">
//       <div className="side-top-content">
//         <div className="stats-title-format">
//           <span className="title-format">
//             <div className="title-icon">
//               <FontAwesomeIcon icon={faChartBar} />
//             </div>
//             Stats
//           </span>
//           <span className="title-format">View all</span>
//         </div>
//         <div className="side-top-info">
//           <div className="side-stats">
//             <div id="side-stats-left">
//               <h3 id="left-stats">Plays last 24 hours</h3>
//               <span id="left-num">352</span>
//             </div>
//             <div id="side-stats-right">
//               <h3 id="right-stats">Plays last 7 days</h3>
//               <span id="right-num">1953</span>
//             </div>
//           </div>

//           <div className="side-stats-total">
//             <h3>103.5K plays in total</h3>
//           </div>
//         </div>
//       </div>
//       <div className="side-middle-content">
//         <div className="stats-title-middle">
//           <span className="title-format">
//             <div className="title-icon">
//               <FontAwesomeIcon icon={faUserFriends} />
//             </div>
//             Who to follow
//           </span>
//           <span className="title-format">
//             <div className="title-icon">
//               <FontAwesomeIcon icon={faRedo} />
//             </div>
//             Refresh
//           </span>
//         </div>
//         <div className="side-middle-info">{userLi}</div>
//       </div>
//       <div className="side-bottom-content"></div>
//     </section>
//   );
// };
