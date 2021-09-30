import React from 'react'
import './SocialMediaBar.scss'

export default function SocialMediaBar({facebook, instagram, linkedIn, youtube}) {
    const fbStyle = {
        width: facebook +'%'
    }
    const instaStyle = {
        width: instagram +'%'
    }
    const liStyle = {
        width: linkedIn +'%'
    }
    const ytStyle = {
        width: youtube +'%'
    }
    return (
        <div className="socialMediaBar">
            <div className="facebook"
                style={fbStyle}
            ></div>
            <div className="instagram"
                style={instaStyle}
            ></div>
            <div className="linkedIn"
                style={liStyle}
            ></div>
            <div className="youtube"
                style={ytStyle}
            ></div>
        </div>
    )
}
