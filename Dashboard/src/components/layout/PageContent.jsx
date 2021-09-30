import React from 'react'
import PageTitle from '../home/PageTitle'
import Widget from '../common/Widget'
import CalendarLine from '../home/CalendarLine'
import SocialMediaStats from '../home/SocialMediaStats'

import './PageContent.scss'

export default function PageContent() {
    return (
        <div className="pageContent">
            <PageTitle />
            <Widget title="Schedule Content">
                <CalendarLine taskTitle="Write 5 microblog articles on Instagram" taskCategory="Office / Marketing" complete={72} day={18} month="Jul"/>
                <CalendarLine taskTitle="Publish 20 post on Dribbbles" taskCategory="Office / Marketing" complete={14} day={24} month="Jul"/>
                <CalendarLine taskTitle="Drafting Material for Travel Campaign" taskCategory="Drafting" complete={43} day={18} month="Jul"/>
            </Widget>
            <Widget title="Top Channels">
                <SocialMediaStats facebook={45} instagram={138} linkedIn={75} youtube={12}/>
            </Widget>
        </div>
    )
}
