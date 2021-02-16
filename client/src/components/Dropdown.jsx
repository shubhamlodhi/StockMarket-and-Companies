import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdown.css'

function Dropdown() {

    const [Index, setIndex] = useState("Nifty 50");

    const getValue = (e) => {
           const stockExchange = {bse:"Sensex",nse: "Nifty 50"}
           setIndex(stockExchange[e.target.value]);
    }


    return (
        <div>
        <div className="dropdown">
            
            <select class="custom-select" id="inputGroupSelect03" onChange={getValue}>
                <option selected value="nse">NSE</option>
                <option value="bse">BSE</option> 
            </select>
            <h3>{Index}</h3>
        </div>
        </div>
    )
}

export default Dropdown
