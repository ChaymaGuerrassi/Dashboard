import React from 'react'
import DayCard from './DayCard'
import ProgressBar from './ProgressBar'
import './CalendarLine.scss'

export default function CalendarLine({taskTitle, taskCategory, complete, day, month}) {
    return (
        <div className="calendarLine">
            <div className="taskMain">
                <DayCard day={day} month={month}/>
                <div className="task">
                    <div className="taskTitle">{taskTitle}</div>
                    <div className="taskCategory">{taskCategory}</div>
                </div>
            </div>
            <ProgressBar percentage={complete}/>
        </div>
    )
}
