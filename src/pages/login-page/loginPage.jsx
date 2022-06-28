import React from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';
import formpage from '../../images/Web 1920 – 1.png';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'; 

function LoginPage() {
  return (
   <div className="vendorLogin">
    <nav className="login-bar">
      <Link to='/vendorforms'>
        <button className="arrow-btn">
          <BsFillArrowLeftCircleFill />
        </button>
      </Link>
    </nav>
    <section className="vendor-box">
      <div className="vendor-content">
        <aside className="content-1">
          <header className="vendor-header">
            Welcome,<span className="header"> Vendor!</span>
          </header>
          <form action="" className="vendor-form">
            <label htmlFor="Email">Email Address</label>
            <input type="email"
            id='email'
            name='email'
            autoComplete='off'
             />
             <label htmlFor="password">Password</label>
             <input type="password"
              name="password"
              id="password" 
            />
          </form>
        </aside>
        <aside className="content-2">
        <img src={formpage} alt={formpage} />
        </aside>
      </div>
    </section>
   </div>
  )
}

export default LoginPage