import React from 'react'
import './ProgressBar.scss'

export default function ProgressBar({percentage}) {
    const divStyle = {
        width : percentage + '%'
    }
    return (
        <div className="progressBar">
            <div className="progress">
                <div className="bar" style={divStyle}></div>
            </div>
            <div className="percentage">{percentage}% Complete</div>
        </div>
    )
}
