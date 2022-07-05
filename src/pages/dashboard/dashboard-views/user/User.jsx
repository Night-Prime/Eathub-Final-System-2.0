import React from 'react';
import './user.css';
import icon from '../../img/icon-1.png';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit Profile</h1>
            <Link to ="/user">
                {/* Button to save USer Profile, where input written to right to be updated on the left */}
                <button className="userEditButton">Save</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    {/* <img src={icon}
                    alt={icon} 
                    className="userShowImg" 
                    /> */}
                    <div className="userShowTopTitle">
                        <div className="userShowUsername">Daniel Tunde</div>
                        <span className="userShowBusiness">Dhaniel Kitchens</span>
                        <div className="userShowBusinessInfo">Food & Beverages</div>
                    </div>
                </div>
                <div className="userShowBottom">
                    <div className="userShowTitle">User Profile</div>

                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">Dhaniel99</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">12.09.2002</span>
                    </div>

                    <h3 className="userShowTitle">Contact Details</h3>

                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+234 811 625 6294</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">danieltundeabati@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Lagos, Nigeria</span>
                    </div>

                </div>
            </div>
            <div className="userUpdate">
                <div className="userUpdateTitle">Edit</div>
                <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    placeholder='Dhaniel99' 
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Daniel Tunde' 
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>E-mail</label>
                                <input 
                                    type="text" 
                                    placeholder='danieltundeabati@gmail.com' 
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                    type="number" 
                                    placeholder='+234 811 625 6294' 
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                    type="text" 
                                    placeholder='Lagos, Nigeria' 
                                    className='userUpdateInput'
                                 />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                {/* <img src={icon} alt={icon} className="userUpdateImg" /> */}
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id='file' style={{display:'none'}} />
                            </div>
                            <button className="userUpdateButton">
                                    Update
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </div>
  )
}