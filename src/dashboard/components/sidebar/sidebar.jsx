import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom'; 
import { LineStyle, TrendingUp, Person, EmojiFoodBeverage, Money, BarChart, Feedback, Home, VerifiedUser } from '@material-ui/icons';
export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                    <Link to='/' className="link">
                        <li className="sidebarItem">
                            <Home className="sidebarIcon" />
                            Home
                        </li>
                    </Link>
                    </ul>
                </div>
                {/* second menu - */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Restaurant</h3>
                    <ul className="sidebarList">
                    <Link to='/order' className="link">
                        <li className="sidebarItem">
                            <LineStyle className="sidebarIcon" />
                            Order(s)
                        </li>
                    </Link>
                    <Link to='/product' className="link">
                            <li className="sidebarItem ">
                                <EmojiFoodBeverage className="sidebarIcon" />
                                Meals
                            </li>
                    </Link>
                    <Link to='/sales' className="link">
                        <li className="sidebarItem ">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </Link>
                    </ul>
                </div>
                {/* third menu -  */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Customer</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className="link">
                            <li className="sidebarItem">
                                <Person className="sidebarIcon" />
                                Customers
                            </li>
                        </Link>
                        <Link to='/transaction' className="link">
                            <li className="sidebarItem ">
                                <Money className="sidebarIcon" />
                                Transactions
                            </li>
                        </Link>
                        <Link to='/feedback' className="link">
                        <li className="sidebarItem ">
                            <Feedback className="sidebarIcon" />
                            Feedback
                        </li>
                    </Link>
                    </ul>
                </div>
                 {/* Fourth Menu -  */}
                 <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Management </h3>
                    <ul className="sidebarList">
                    <Link to='/profile' className="link">
                            <li className="sidebarItem">
                                <VerifiedUser className="sidebarIcon" />
                                Profile
                             </li>
                        </Link>
                        <Link to='/report' className="link">
                            <li className="sidebarItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                             </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}