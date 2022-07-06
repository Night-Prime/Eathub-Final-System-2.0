import React from 'react';
import './topbar.css';
import logo from '../../../../images/eat-hub.png';
import { NotificationsNone, Settings } from '@material-ui/icons';
import Profile from '../../../../images/icon-1.png';
import { Link } from 'react-router-dom';

export default function topbar() {
  return (
    <div className="navbar">
        <div className="navbarWrap">
            <div className="navLeft">
                <img className="logo" src={logo} alt={logo} />
            </div>
            <div className="navRight">
                <div className="navbarIcons">
                    <NotificationsNone className="navIcon" />
                    <span className="navIconBadge">1</span>
                </div>
                <div className="navbarIcons">
                    <Settings className="navIcon" />
                </div>
                <Link to='/profile' className="link">
                    <img className="navAvatar" src={Profile} alt={Profile} />
                </Link>
            </div>
        </div>
    </div>
  )
}
