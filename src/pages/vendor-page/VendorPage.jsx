import React from 'react';
import { Link } from 'react-router-dom';
import './VendorPage.css';
import eathub from '../../images/eat-hub-vendor.png';
import brunch from '../../images/woman-chef-cooking-vegetables-pan.jpg';
import meals from '../../images/Meals.jpg';
import restaurants from '../../images/restaurant.jpg';
import analysis from '../../images/analysis 3.jpg';
import chef from '../../images/businesswoman-using-tablet.jpg';
import footer from '../../images/Footer-test.png';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'; 
import food from '../../images/top-view-vegetable-soup-with-meat-inside-plate-grey.png';

function VendorPage() {
    return (
       <main className="main-vendor">
        {/* Navbar section */}
            <nav>
                <header class="nav-header">
                    <img src = {eathub} alt = {eathub} />
                    <Link to='/vendorforms'>
                        <button className="arrow-btn">
                        <BsFillArrowRightCircleFill />
                    </button>
                    </Link>
                </header>
            </nav>
        {/* Hero Section */}
            <section className="vendor-hero">
                <aside>
                    <h1>Become a Certified <span class="special-txt">Vendor!</span></h1>
                    <p>Own and build your Online Restaurant and also provide kitchen services using our platform today.</p>
                </aside>
                <aside>
                    <img src = {food} alt= {food}/>
                </aside>
                <aside>
                    <h1>
                        JOIN US!
                    </h1>
                    <p>
                        If <span class="special-txt">You </span> are a professional Cook or Chef, render Online food business through Social media or offer delivery services,
                        This is the best E-platform for you to garner the attention of potential customers and have access to alot of useful services.
                    </p>
                </aside>
            </section>
        {/* Card section */}
        <section className="card-section">
            <div className="card">
                    <img src={meals} alt = {meals} />
                    <div className="card-text">
                        <h3>Meals</h3>
                        <p>Get a Chance to display the aesthetics end product meals made by you on our space.</p>
                    </div>
            </div>
            <div className="card">
                    <img src={restaurants} alt = {restaurants} />
                    <div className="card-text">
                        <h3>E-Restaurants</h3>
                        <p>Never have to worry about marketing, cos we have that covered for you, using our platform to leverage and filter through the right customer for you.</p>
                    </div>
            </div>
            <div className="card">
                    <img src={analysis} alt = {analysis} />
                    <div className="card-text">
                        <h3>Sales Analytics</h3>
                        <p>The chance to track your sales and have insights to every trade made on the E-restaurant.</p>
                    </div>
            </div>
        </section>
        {/* Box section */}
        <section class="vendor-box-1">
            <img src={brunch} alt={brunch} />
            <div className="vendor-text-box">
                <h2>
                Own your <span class="special-txt">Food Space </span>with Us
                </h2>
                <h3> Ever thought of how to get customers to purchase the meals you cook?</h3>
                <p>
                    Proper Registration now, and get the chance to market your cooking skills and meals to the right audience who can purchase them.
                </p>
            </div>
        </section>
        {/* Box Section-2 */}
        <section className="vendor-box-2">
            <div className="vendor-text-box-2">
                <h2>View your <span class="special-txt"> Insights & Analytics</span> here!
                </h2>
                <p>Ever thought of how to get customers to purchase the meals you cook?<br />
                    Proper Registration now, and get the chance to market your cooking skills and meals to the right audience who can purchase them.
                </p>
            </div>
            <img src={chef} alt={chef} />
        </section>

        {/* Footer Section*/}
        <section className="footer-section">
            <footer>
                <img src={footer} alt={footer} />
                <div className="link">
                    <Link to="/" className="links">Download Application</Link>
                    <Link to="/" className="links">Premium Offers</Link>
                    <Link to="/" className="links">About Eathub</Link>
                </div>
            </footer>
        </section>
       </main>
    )
}

export default VendorPage
