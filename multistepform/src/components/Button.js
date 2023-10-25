import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/step1styles.css'
import DataContext from "./DataContext";

const Button = (props) =>{
    const location = useLocation();
    const navigate = useNavigate();

    const {data, setData} = useContext(DataContext);

    const handleClick = () =>{
        switch (location.pathname) {
            case "/":
                if(data.name===""){
                    setData((prev)=>({...prev, nameerror:"y"}))
                }
                if(data.email===""){
                    setData((prev)=>({...prev, emailerror:"y"}))
                }
                if(data.phone==""){
                    setData((prev)=>({...prev, phoneerror:"y"}))
                }
                else if(data.name!=="" && data.phone!="" && data.email!==""){
                    setData((prev)=>({...prev, nameerror:""}))
                    navigate("/step2");
                }
                break;
            case "/step2":
                if(data.plan===""){
                    alert("Please select a plan")
                }
                else{
                navigate("/step3");
                }
                break;
            case "/step3":
                navigate("/step4");
                break;
            case "/step4":
                navigate("/step5");
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    frequency: "monthly",
                    plan: "",
                    price: null,
                    price_frequency: "",
                    addons: [],
                    addons_price: 0,
                    addons_price_frequency: "",
                    nameerror: "",
                    emailerror: "",
                    phoneerror: ""
                  })
                break;
            default:
                break;
        }
    }

    return(
        <div>
            <button className={`btn ${location.pathname==="/step4"?"s4":""}`} onClick={handleClick} type="button">{location.pathname==="/step4"? "Confirm": "Next Step"}</button>
        </div>
    )
}
export default Button