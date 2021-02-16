import React from 'react'
import "./Overview.css"
function Overview() {
    return (
        <div className="overview">
            <h3>Overview</h3>
            <div className="details">
            <div className="left">
                <div className="space"> <span>Open</span> <span>{"11,353.30"}</span></div><br/>
                <div className="space"> <span>Previous Close</span> <span>{"11,353.30"}</span></div><br/>
                <div className="space"> <span>Day High</span> <span>{"11,353.30"}</span></div><br/>
            </div>
            <div className="right">
                <div className="space"> <span>Day Low</span> <span>{"11,353.30"}</span></div><br/>
                <div className="space"> <span>52 Week High</span> <span>{"11,353.30"}</span></div><br/>
                <div className="space"> <span>52 Week Low</span> <span>{"11,353.30"}</span></div><br/>
            </div>

            </div>
        </div>
    )
}

export default Overview
