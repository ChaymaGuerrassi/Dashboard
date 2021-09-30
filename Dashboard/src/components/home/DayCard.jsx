import React from 'react'
import './DayCard.scss'

function DayCard({day, month}) {
    return (
        <div className="dayCard">
            <p className="month">{month}</p>
            <p className="day">{day}</p>
        </div>
    )
}

export default DayCard
