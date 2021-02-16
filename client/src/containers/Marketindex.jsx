import React from 'react'
import Dropdown from "../components/Dropdown"
import Index from "../components/Index"
import Overview from "../components/Overview"
function Marketindex() {
    return (
        <div style={{"background-color":"white"}}>
            <Dropdown/>
            {/* <span>Dropdown</span> */}
            <hr/>
            {/* <span>Index</span> */}
            <Index/>
            <hr/>
            {/* <div>Overview</div> */}
            <Overview/>
        </div>
    )
}

export default Marketindex
