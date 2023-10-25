import React, { useContext, useEffect } from "react";
import DataContext from "./DataContext";
import '../styles/step1styles.css'
import LeftSection from "./LeftSection";
import BackBtn from "./BackBtn";
import Button from "./Button";

const Step3 = () =>{

    const {data, setData} = useContext(DataContext);

    useEffect(()=>{
        setData((prev)=>({...prev, addons:[]}))
    }, [])
    
    const handleCheck = (e) =>{
        console.log(e.target.checked);
        setData((prev)=>{
            if(e.target.checked === true){
                let updatedAddOns = [...prev.addons];
                updatedAddOns.push(e.target.value); 
                return {...prev, addons:updatedAddOns};
            }
            else{
                let updatedAddOns = [...prev.addons];
                updatedAddOns.splice(updatedAddOns.indexOf(e.target.value),1);
                return {...prev, addons:updatedAddOns};
            }
        })
        
    }

    return(
        <div className="fullwrapper">
            <div className="container">
            <div className='leftsection'>
                    <LeftSection/>
                </div>

                <div className="rightsection">
                    <div className="step3-header">
                        Pick add-ons
                    </div>
                    <div className="step3-addtext">
                        Add-ons help enhance your gaming experience.
                    </div>
                    <div className="addons">
                        <div className={`onlineservice ${data.addons.indexOf("OnlineService")===-1?"":"checkedselected"}`}>
                            <div className={`addons-checkbox`}><input type="checkbox" value="OnlineService" onChange={handleCheck}/></div>
                            <div className="addons-txt">
                                <div className="addons-header">Online service</div>
                                <div className="addons-footer">Access to multiplayer games</div>
                            </div>
                            <div className="addons-plan">{data.frequency==="monthly"? "+$1/mo":"+$10/yr"}</div>
                        </div>
                        <div className={`largerstorage ${data.addons.indexOf("LargerStorage")===-1?"":"checkedselected"}`}>
                            <div className="addons-checkbox"><input type="checkbox" value="LargerStorage" onChange={handleCheck}/></div>
                            <div className="addons-txt">
                                <div className="addons-header">Larger Storage</div>
                                <div className="addons-footer">Extra 1TB of cloud save</div>
                            </div>
                            <div className="addons-plan">{data.frequency==="monthly"? "+$2/mo":"+$20/yr"}</div>
                        </div>
                        <div className={`customizable ${data.addons.indexOf("CustomizableProfile")===-1?"":"checkedselected"}`}>
                            <div className="addons-checkbox"><input type="checkbox" value="CustomizableProfile" onChange={handleCheck}/></div>
                            <div className="addons-txt">
                                <div className="addons-header">Customizable profile</div>
                                <div className="addons-footer">Custom theme on your profile</div>
                            </div>
                            <div className="addons-plan">{data.frequency==="monthly"? "+$2/mo":"+$20/yr"}</div>
                        </div>
                    </div>
                    <BackBtn/>
                    <Button/>
                </div>

            </div>
        </div>
    )
}

export default Step3