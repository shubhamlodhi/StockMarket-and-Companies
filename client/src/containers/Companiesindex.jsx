import React from 'react';
import Dropdown from "../components/Dropdown";
import Timeintervals from "../components/Timeintervals";
import SmallOverview from "../components/SmallOverview";
import Companydropdown from "../components/Companydropdown";
function Companiesindex() {
    return (
        <div style={{"background-color":"white","height": "50vh"}}>
            {/* <span>Dropdown</span> */}
            <hr/>
            <h2 style={{"text-align": "center"}}>Charts</h2>
            <Companydropdown/>
            <hr/>
            {/* <span>Timeintervals</span> */}
            <Timeintervals/>
            <hr/>
            {/* <span>SmallOverview</span> */}
            <SmallOverview/>
            <hr/>
            <span>Graph</span>{/* <Graph/> */}
        </div>
    )
}

export default Companiesindex
