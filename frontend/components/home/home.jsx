import React from 'react';
import LoginModal from '../session_form/modal'
import { Link } from 'react-router-dom';

const Home = ({ login, logout, openModal }) => (
    <div className="home">
        <header className="home-header">
            <nav className="home-nav">
                <section className="home-nav-content">
                    <div className="nav-logo">
                        <img src="https://i.imgur.com/UqRmG9K.png" alt=""/>
                    </div>
                    <div className="nav-login-form">
                        <button id='login' onClick={()=> openModal('login')}>Sign In</button>
                        <button id='signup' onClick={()=> openModal('signup')}>Create account</button>
                        <span>For Creators</span>
                    </div>
                </section>
            </nav>
        </header>
        <section className="home-body">
            <section className="home-body-content">

            </section>
        </section>
    </div>
)

export default Home;