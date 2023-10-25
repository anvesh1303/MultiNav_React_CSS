import React, { useContext, useEffect } from "react";
import DataContext from "./DataContext";
import '../styles/step1styles.css'
import LeftSection from "./LeftSection";
import BackBtn from "./BackBtn";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Step4 = () =>{

    const {data} = useContext(DataContext);
    console.log(data);

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/step2");
    }
    
    const monthlyaddonObj = {
        OnlineService: {name: "Online service", price:1, freq: "mo"},
        LargerStorage: {name: "Larger storage", price:2, freq: "mo"},
        CustomizableProfile: {name: "Customizable profile", price:2, freq: "mo"}
    }
    const yearlyaddonObj = {
        OnlineService: {name: "Online service", price:10, freq: "yr"},
        LargerStorage: {name: "Larger storage", price:20, freq: "yr"},
        CustomizableProfile: {name: "Customizable profile", price:20, freq: "yr"}
    }

    let total = data.price;

    data.addons.forEach(element => {
        if(data.frequency === "monthly"){
            total = total+monthlyaddonObj[element].price;
        }
        else{
            total = total+yearlyaddonObj[element].price;
        }
    });

    useEffect(()=>{

    }, [])
    

    return(
        <div className="fullwrapper">
            <div className="container">
            <div className='leftsection'>
                    <LeftSection/>
                </div>

                <div className="rightsection">
                    <div className="step4-header">
                        Finishing up
                    </div>
                    <div className="step4-addtext">
                        Double-check everything looks OK before Confirming.
                    </div>
                    <div className="plan-step2">
                        <div className="nameandchange">
                            <div className="plan-name">
                                {data.plan} ({data.frequency})
                            </div>
                            <button className="change" onClick={handleClick}>Change</button>
                        </div>
                        <div className="plans-frequency">${data.price}/{data.frequency==="monthly"?"mo":"yr"}</div>
                    </div>
                    <div className="addons-step3">
                        {data.addons.map((addon)=>{
                            return <div className="iter"> <div className="addon-name">{addon}</div> <div className="addon-frequency">{data.frequency==="monthly"?`+$${monthlyaddonObj[addon].price}/mo`: `+$${yearlyaddonObj[addon].price}/yr`}</div> </div>
                        })}
                        
                        
                    </div>
                    <div className="result">
                        <div className="total">Total ({data.frequency})</div>
                        <div className="sum">+${total}/{data.frequency==="monthly"?"mo":"yr"}</div>

                    </div>
                    <BackBtn/>
                    <Button/>
                </div>

            </div>
            
        </div>
    )
}
export default Step4