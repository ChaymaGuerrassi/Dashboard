import React from 'react'
import './Reach.scss'

function Reach({reach, percentage, fluctuation, field}) {
    const percentageStyle = { 
        color : fluctuation === 'rise' ? '#30D988' : '#DD405F'
    }
    return (
        <div className="title">
            <span>{reach}K</span>
            {
                fluctuation === 'drop' && 
                
                <svg  width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.12524 4.87439L3.50024 7.49939L0.875243 4.87439" stroke="#DD405F" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.50024 7.49954L3.50024 1.49954" stroke="#DD405F" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            {
                fluctuation === 'rise' &&
                <svg width="7" height="9" viewBox="0 0 7 9" fill="#30D988" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.12524 4.12561L3.50024 1.50061L0.875243 4.12561" stroke="#30D988" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.50024 1.50046L3.50024 7.50046" stroke="#30D988" stroke-width="1.38462" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            }
            <p className="percent" style={percentageStyle}>{percentage} %</p>
            <p>{field}</p>
        </div>
    )
}

export default Reach
