import React from 'react'
import "./SmallOverview.css";
function SmallOverview() {
    return (
        <div className="smalloverview">
            <span>{"27-Jan-2020"}</span>
            <span>{`open: ${1500.67}`}</span>
            <span>{`High: ${1500.67}`}</span>
            <span>{`Low: ${1500.67}`}</span>
            <span>{`Close: ${1500.67}`}</span>
            <span>{`Volume: ${1500.67}`}</span>
        </div>
    )
}

export default SmallOverview
