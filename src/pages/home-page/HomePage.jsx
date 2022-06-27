import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import eathub from '../../images/eat-hub.png';
import bike from '../../images/Delivery Bike.jpg';
import meal from '../../images/Meals.jpg';
import phone from '../../images/Phone.jpg';
import brunch from '../../images/brunch-choice-crowd-dining-food-options-eating-concept.jpg';
import chef from '../../images/woman-chef-cooking-vegetables-pan.jpg';
import map from '../../images/Screen Shot 2022-06-15 at 9.11.17 AM.png';
import footer from '../../images/Footer-test.png';

function HomePage() {
  return (
    <main>
        <section class ="hero-section">
            {/* Navbar section */}
            <nav>
                <header>
                    <img src = {eathub} alt = {eathub} />
                    <Link to="/vendorpage">
                        <button className="sign-btn">
                            Sign up
                        </button>
                    </Link>
                </header>
            </nav>

            {/* Hero Section */}
            <div className="searchbar">
                <h1>Meals at your DoorStep</h1>
                <div className="searchbar-input">
                <input type="text" placeholder="Search for confectionaries, meals, Chef and restaurants" />
                <button>Search</button>
                </div>
            </div>
        </section>
        <section className="card-section">
                {/* Card Section */}
            <div className="card-content">

                <div className="card">
                    <img src = {meal} alt= {meal} />
                    <h1>Healthy Meals</h1>
                    <p>Making sure the meals served to you are in perfect conditions and prepared in a healthy environment is our major priority. </p>
                </div>
                <div className="card">
                    <img src = {bike} alt= {bike} />
                    <h1>Fast Delivery</h1>
                    <p>Fully focused on making sure every ordered meal gets prepared and delivered on schedule easily.</p>
                </div>
                <div className="card">
                    <img src = {phone} alt= {phone} />
                    <h1>Excellent Customer Service</h1>
                    <p>We would love to build an amazing experience with each every user to personalize every meal suggestion to their taste.</p>
                </div>
            </div>
        </section>
        <section classname="box-1">
            {/* Box Section-1 */}
            <img src={brunch} alt={brunch} />
            <div className="text-box">
                <h2>
                    Meals delivered with just one <span style={{color: "var(--orange-5)"}}>Click</span> 
                </h2>
                <p>Installation of our Mobile application on mobile devices, Eathub automatically provides the nearest available food Restaurant and cooking services of your choice.<br />
                    Feed your eyes on not just aesthetically pleasing but various delicious meals our certified Food Vendors has to offer on this platform.
                </p>
                <button className ="btn-download">
                    Download App
                </button>
            </div>
        </section>
        {/* Box Section-2 */}
        <section className="box-2">
            <div className="text-box-2">
                <h2>
                    Meals delivered with just one <span style={{color: "var(--orange-5)"}}>Click</span> 
                </h2>
                <p>Ever thought of how to get customers to purchase the meals you cook?<br />
                    Proper Registration now, and get the chance to market your cooking skills and meals to the right audience who can purchase them.
                </p>
                <button className ="btn-download">
                    Setup Restaurant
                </button>
            </div>
            <img src={chef} alt={chef} />
        </section>

        {/* Map Section */}
        <section className="map-section">
            <div className="map">
                <h1>Delivery made to every corner of Lagos</h1>
                <img src={map} alt={map} />
            </div>
        </section>
        {/* Footer Section */}
        <section className="footer-section">
            <footer>
                <img src={footer} alt={footer} />
                <div className="link">
                    <Link to="/vendorpage" className="links">Setup Restaurant</Link>
                    <Link to="/" className="links">Download Application</Link>
                    <Link to="/" className="links">Premium Offers</Link>
                    <Link to="/" className="links">About Eathub</Link>
                </div>
            </footer>
        </section>
    </main>
  )
}

export default HomePage