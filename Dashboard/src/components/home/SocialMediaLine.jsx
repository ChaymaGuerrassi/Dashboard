import React from 'react'
import './SocialMediaLine.scss'

function SocialMediaLine({socialMedia, icon, visitors, percentage}) {
    
    return (
        <div className="socialMediaLine">
            <img src={icon} alt="" srcset="" />
            <p className="social" id={socialMedia}>{socialMedia}</p>
            <p className="visitors">{ visitors} {visitors <= 1 ? "visitor" : "visitors"}</p>
            <p className="percentage">{percentage} %</p>
        </div>
    )
}

export default SocialMediaLine
