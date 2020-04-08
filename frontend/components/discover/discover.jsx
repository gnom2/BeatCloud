import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

import { faChartBar, faUserFriends, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Discover = props => {


    return (
        <section className="discover">
            <div className="discover-nav">
                <NavBarContainer />
            </div>
            <section className="discover-main">
                <section className="discover-main-content-container">
                        <>
                        </>
                </section>
                <section className="discover-side-content-container">
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
                                Refresh</span>
                        </div>
                        <div className="side-middle-info">
                            <div className="side-middle-follow1">
                                   
                            </div>
                            <div className="side-middle-follow2">

                            </div>
                            <div className="side-middle-follow3">

                            </div>
                        </div>
                    </div>
                    <div className="side-bottom-content"></div>
                    
                </section>
            </section>
            
        </section>
    );
};

export default Discover;