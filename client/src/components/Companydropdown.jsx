import React, {useState} from 'react'
import "./Companydropdown.css";
function Companydropdown() {
    const [Index, setIndex] = useState("Reliance Industries Ltd.");

    const getValue = (e) => {
        //    const stockExchange = {bse:"Sensex",nse: "Nifty 50"}
           setIndex(e.target.value);
    }


    return (
        
        <div className="companydropdown">
            
            <select class="custom-select" id="inputGroupSelect03" onChange={getValue}>
                <option selected value="nse">Reliance</option>
                <option value="Cipla Pharma">Cipla</option>
                <option value="Ashok Leyland">AshokLey</option>
                <option value="Eicher Motors">EicherMot</option>
                <option value="Tata Steel">TataSteel</option> 
            </select>
            {/* <h3>{Index}</h3> */}
        </div>
        
    )
}

export default Companydropdown
