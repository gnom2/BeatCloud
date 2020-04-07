import React from 'react';

const Discover = props => {


    return (
        <section className="discover">
            <nav className="discover-nav">
                <section className="discover-nav-content">
                    <img src="https://i.imgur.com/UqRmG9K.png" alt=""/>
                </section>
                Discovery page
                <button type="submit" onClick={props.logout}>Log Out</button>
            </nav>
        </section>
    );
};

export default Discover;