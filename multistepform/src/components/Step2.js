import React, { useContext} from "react";
import '../styles/step1styles.css'
import BackBtn from "./BackBtn";
import Button from "./Button";
import DataContext from "./DataContext";
import LeftSection from "./LeftSection";
import CasinoIcon from '@mui/icons-material/Casino';
import GamesIcon from '@mui/icons-material/Games'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

const Step2 = () =>{

    
    const {data, setData} = useContext(DataContext);

    

    const planfreq = [
            {
                arc: "$9/mo",
                adv: "$12/mo",
                pro: "$15/mo"
            },
            {
                arc: "$90/yr",
                adv: "$120/yr",
                pro: "$150/yr"
            }
        ];

    
    const toggleHandler = () =>{
        if(data.frequency==="monthly"){
            //setFrequency("yearly");
            setData((prev)=>({...prev, frequency:"yearly", price: data.price*10}))
            
        }
        else{
            //setFrequency("monthly");
            setData((prev)=>({...prev, frequency:"monthly", price: data.price/10}))
        }
    }

    const planHandler = (plantype) =>{
        switch (plantype) {
            case "arcade":
                data.frequency==="monthly"? setData((prev)=>({...prev, plan:"arcade", price:9, price_frequency:"$9/mo"})): setData((prev)=>({...prev, plan:"arcade", price:90, price_frequency:"$90/yr"}));
                break;
            case "advanced":
                data.frequency==="monthly"? setData((prev)=>({...prev, plan:"advanced", price:12, price_frequency:"$12/mo"})): setData((prev)=>({...prev, plan:"advanced", price:120, price_frequency:"$120/yr"}));
                break;
            case "pro":
                data.frequency==="monthly"? setData((prev)=>({...prev, plan:"pro", price:15, price_frequency:"$15/mo"})): setData((prev)=>({...prev, plan:"pro", price:150, price_frequency:"$150/yr"}));
                break;
            default:
                break;
        }
    }

    

    return(
        <div className="fullwrapper">
            <div className="container">
                <div className='leftsection'>
                    <LeftSection/>
                </div>
            <div className="rightsection">
                <div className="step2header">
                    Select your plan
                </div>
                <div className="step2addtext">
                    You have the option of monthly or yearly billing.
                </div>
                <div className="plans">
                    <button className={`arcade ${data.plan==="arcade"? "selected":""}`} onClick={()=>{planHandler("arcade")}}>
                        <div className="game-icon-1"><GamesIcon/></div>
                        <div className="txt">Arcade</div>
                        <div className="planfreq">{data.frequency==="monthly"? planfreq[0].arc: planfreq[1].arc}</div>
                    </button>
                    <button className={`advanced ${data.plan==="advanced"? "selected":""}`} onClick={()=>{planHandler("advanced")}}>
                    <div className="game-icon-2"><CasinoIcon /></div>
                        <div className="txt">Advanced</div>
                        <div className="planfreq">{data.frequency==="monthly"? planfreq[0].adv: planfreq[1].adv}</div>
                    </button>
                    <button className={`pro ${data.plan==="pro"? "selected":""}`} onClick={()=>{planHandler("pro")}}>
                        <div className="game-icon-3"><SportsEsportsIcon/></div>
                        <div className="txt">Pro</div>
                        <div className="planfreq">{data.frequency==="monthly"? planfreq[0].pro: planfreq[1].pro}</div>
                    </button>
                </div>

                <div className="toggle">
                    Frequency: <button onClick={toggleHandler} type="button" className="togglebtn">{data.frequency}</button> 

                </div>
                    
                    <BackBtn/>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Step2;