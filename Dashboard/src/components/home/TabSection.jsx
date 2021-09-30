import React from 'react'

function TabSection({title, children}) {
    return (
        <div className="tabSection">
            <p className="tabsTitle">{title}</p>
            {children}
        </div>
    )
}

export default TabSection
