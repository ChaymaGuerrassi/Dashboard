import React from 'react'
import {Link, useLocation} from 'react-router-dom'


function Tab({logo, tabTitle, notification, path='/Enattente'}) {

    const location = useLocation();
    console.log(location)

    return (
        <Link to={path}>
            <div className="sidebarTab" 
                 style={{
                     background: location.pathname === path ? '#1B2B65' : '#081A51;'
                 }}>
                <div className="left">
                    <div className="tablogoContainer">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <p>{tabTitle}</p>
                </div>
                {
                    notification && 
                    <div className="right">
                        {notification}
                    </div>
                }
                
            </div>
        </Link>
        
    )
}

export default Tab
