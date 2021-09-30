import React from 'react'
import './SocialMediaStats.scss'
import SocialMediaBar from './SocialMediaBar'
import SocialMediaLine from './SocialMediaLine'
import Reach from './Reach'

import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import LinkedIn from '../../assets/img/linkedIn.svg'
import Youtube from '../../assets/img/youtube.svg'

export default function SocialMediaStats({facebook, instagram, linkedIn, youtube}) {

    const percent = (total, amount) =>{
        return Math.round((amount*100)/total)
    }
    const vistors = facebook + instagram + linkedIn + youtube
    
    let facebookPercent = percent(vistors, facebook)
    let instagramPercent = percent(vistors, instagram)
    let linkedInPercent = percent(vistors, linkedIn)
    let youtubePercent = percent(vistors, youtube)

    return (
        <div className="socialMediaStats">
            <Reach reach="120" percentage="12" fluctuation="rise" field="visit"/>
            <SocialMediaBar facebook={facebookPercent} instagram={instagramPercent} linkedIn={linkedInPercent} youtube={youtubePercent}/>
            <SocialMediaLine socialMedia="Facebook" icon={Facebook} visitors={facebook} percentage={facebookPercent}/>
            <SocialMediaLine socialMedia="Instagram" icon={Instagram} visitors={instagram} percentage={instagramPercent}/>
            <SocialMediaLine socialMedia="LinkedIn" icon={LinkedIn} visitors={linkedIn} percentage={linkedInPercent}/>
            <SocialMediaLine socialMedia="Youtube" icon={Youtube} visitors={youtube} percentage={youtubePercent}/>

        </div>
    )
}
