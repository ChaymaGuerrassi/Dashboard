import React from 'react'
import Navbar from '../components/layout/Navbar/Navbar'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import PageContent from '../components/layout/PageContent'
import StatWidget from '../components/home/StatWidget'
import PlotlyChart from '../components/home/PlotlyChart'
import MultiAxisLine from '../components/home/MultiAxisLine'
import MultiAxisBars from '../components/home/MultiAxisBars'

export default function Home() {
    return (
        <div className="homePage">
            <Sidebar />
            <Navbar notification={true} />
            <div className="left">
                <PageContent />
            </div>
            <div className="right">
                <StatWidget title="Content Reach Summary" filter="Monthly">
                    <MultiAxisLine width={388} height={120}/>
                </StatWidget>
                <StatWidget title="Audience Visitor" filter="April 2021 - September 2021">
                    <MultiAxisBars width={388} height={120}/>
                </StatWidget>
            </div>
            
        </div>
    )
}
