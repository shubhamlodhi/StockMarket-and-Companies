import React from 'react'
import MarketIndex from './containers/Marketindex';
import CompaniesIndex from './containers/Companiesindex';
import "./Main.css"
export default function Main() {
    return (
        <div  className="Main" style={{"background-color":"#EEEEEE","height":"100vh"}}>
            {/* <h1 >Main Page</h1> */}

            <MarketIndex />
            <CompaniesIndex/>

        </div>
    )
}
