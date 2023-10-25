import React from "react";
import '../styles/step1styles.css';
import { useLocation } from "react-router-dom";

const LeftSection = () =>{
    const location = useLocation();
    console.log(location.pathname);
    

    return(
        <div>
            <div className="whole">
            <div className="wrapper">
                <div className="block">
                    <div className={`number ${location.pathname==="/"? "currentlocation":""}`}>1</div>
                    <div className="texts">
                    <div className="text">STEP 1</div>
                    <div className="text info">YOUR INFO</div>
                    </div>
                </div>
                <div className="block">
                    <div className={`number ${location.pathname==="/step2"? "currentlocation":""}`}>2</div>
                    <div className="texts"> 
                    <div className="text">STEP 2</div>
                    <div className="text info">SELECT PLAN</div>
                    </div>
                </div>
                <div className="block">
                    <div className={`number ${location.pathname==="/step3"? "currentlocation":""}`}>3</div>
                    <div className="texts">
                    <div className="text">STEP 3</div>
                    <div className="text info">ADD-ONS</div>
                    </div>
                </div>
                <div className="block">
                    <div className={`number ${location.pathname==="/step4"? "currentlocation":""}`}>4</div>
                    <div className="texts">
                    <div className="text">STEP 4</div>
                    <div className="text info">SUMMARY</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LeftSection