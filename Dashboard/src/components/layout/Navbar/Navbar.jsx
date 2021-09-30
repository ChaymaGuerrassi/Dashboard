import React from 'react'
import './Navbar.scss'

import userProfilPicture from '../../../assets/img/Rectangle 159.svg'
import vectorIcon from '../../../assets/img/Vector copie.svg'
import searchIcon from '../../../assets/img/SearchIcon.svg'
import userOnline1 from '../../../assets/img/user1.jpg'
import userOnline2 from '../../../assets/img/user2.jpg'
import userOnline3 from '../../../assets/img/user3.jpg'
import userOnline4 from '../../../assets/img/user4.jpg'
import notifIcon from '../../../assets/img/Bell.svg'


function Navbar({notification=false}) {
    return (
        <div className="navbarMain">
            <div className="infos-search">
                <img src={userProfilPicture} alt="" srcset="" />
                <div className="mail">
                    <p>Ezra Miller</p>
                    <p>ezra.miller@email.com</p>
                </div>
                <img src={vectorIcon} alt="" srcset="" />
                <div className="verticalSep"></div>
                
                <img src={searchIcon} alt="" srcset="" />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="onlineUsers">
                <div className="connectedIcon"></div>
                <p>ONLINE</p>
                <div className="onlineUsersIcon">
                    <img src={userOnline1} alt="" />
                </div>
                <div className="onlineUsersIcon">
                    <img src={userOnline2} alt="" />
                </div>
                <div className="onlineUsersIcon">
                    <img src={userOnline3} alt="" />
                </div>
                <div className="onlineUsersIcon">
                    <img src={userOnline4} alt="" />
                </div>
                <div className="verticalSep"></div>
                <div className="notif">
                    <img src={notifIcon} alt="" />
                    {
                        notification && <div className="notifSign"></div>
                    }
                    
                </div>
                
            </div>
        </div>
    )   
}

export default Navbar
