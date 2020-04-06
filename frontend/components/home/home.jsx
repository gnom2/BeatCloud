import React from 'react';
import LoginModal from '../session_form/modal'
import { Link } from 'react-router-dom';

const Home = ({ login, logout, openModal }) => (
    <div className="home">
        <header className="home-header">
            <nav className="home-nav">
                <div className="nav-logo">
                    <img src="https://i.imgur.com/0C6NlVu.jpg" alt=""/>
                </div>
                <div className="nav-login-form">
                    <button id='login' onClick={()=> openModal('login')}>Sign In</button>
                    <button id='signup' onClick={()=> openModal('signup')}>Create account</button>
                    <span>For Creators</span>
                </div>
            </nav>
        </header>
        <body className="home-body">
            <section className="home-body-content">

            </section>
        </body>
    </div>
)

export default Home;