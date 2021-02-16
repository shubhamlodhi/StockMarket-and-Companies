import React from 'react';
import './Index.css';
function index() {
    return (
        <div className="index">

            <div className="left">
                <h1>11,323.285</h1>
                <h3> 🔺 11,323.285</h3>
                <h6>As on Aug Date</h6>

            </div>

            <div className="right">
                
                <label for="customRange1" class="form-label">Day Range</label>
                <br/>
                <div className="sliderRange"><span>11,315.25</span> <span>11,36.40</span></div>
                <div className="slider">
                <span>L  </span>
                <input type="range" class="form-range" id="customRange1" value={75}></input>
                <span>  H</span>
                </div>

                <br/>

                <label for="customRange1" class="form-label">52 Week Range</label>
                <br/>
                <div className="sliderRange"><span>11,315.25</span> <span>11,36.40</span></div>
                <div className="slider">
                <span>L  </span>
<input type="range" class="form-range" id="customRange1" value={50}></input>
<span>  H</span>

</div>
               
               </div> 
        </div>
    )
}

export default index
