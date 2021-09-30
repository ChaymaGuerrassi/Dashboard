import React from 'react'
import './Sidebar.scss'
import Tab from '../../home/Tab'
import TabSection from '../../home/TabSection'

import logoIcon from '../../../assets/img/logo.svg'
import chartIcon from '../../../assets/img/Chart_fill.svg'
import inboxIcon from '../../../assets/img/Chat.svg'
import userIcon from '../../../assets/img/User_box.svg'
import folderIcon from '../../../assets/img/Folder_alt.svg'
import chartAltIcon from '../../../assets/img/Chart_alt.svg'
import calendarIcon from '../../../assets/img/Calendar.svg'
import searchIcon from '../../../assets/img/Search_alt.svg'
import settingsIcon from '../../../assets/img/Setting_alt_line.svg'
import ellipseIcon from '../../../assets/img/Ellipse 21.svg'
import vectorIcon from '../../../assets/img/Vector.svg'



function Sidebar() {
    return (
        <div className="sidebarMain">
            <div className="upperPart">
                <div className="logoBar">
                    <div className="logoContainer">
                        <img src={logoIcon} alt=""/>
                    </div>
                    
                    <p>Dash</p>
                </div>
                <TabSection title="main menu">
                    <Tab logo={chartIcon} tabTitle={"Dashboard"} path="/"/>
                    <Tab logo={inboxIcon} tabTitle={"Inbox"} notification={15}/>
                </TabSection>
                <TabSection title="Workspace">
                    <Tab logo={userIcon} tabTitle={"Accounts"}/>
                    <Tab logo={calendarIcon} tabTitle={"Schedule Post"}/>
                    <Tab logo={searchIcon} tabTitle={"Communities"}/>
                    <Tab logo={chartAltIcon} tabTitle={"Analytics"}/>
                </TabSection>
                <TabSection title="General">
                    <Tab logo={folderIcon} tabTitle={"File & Folders"}/>
                    <Tab logo={settingsIcon} tabTitle={"Settings"} path="/settings"/>
                </TabSection>
            </div>
            <div className="lowerPart">
                
                <div className="helpCenter">
                    <div className="interrogationSign">
                        <img src={vectorIcon} alt="" srcset="" />
                    </div>
                    <p>Need help with <b>Dash</b>?</p>
                    <button>Go to help center</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
