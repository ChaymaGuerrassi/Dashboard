import React from 'react'
import './Widget.scss'

export default function Widget({title, children}) {
    return (
        <div className="widgetMain">
            
                {
                    title && 
                    <div className="widgetTitle">
                        <p className="mainTitle">{title}</p>
                        <p className="seeMore">See Detail   {'  >'}</p>
                    </div>
                }
                <div className="widgetContent">
                    {children}
                </div>
            
            
        </div>
    )
}
