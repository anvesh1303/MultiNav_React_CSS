import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/step1styles.css'

const BackBtn = () =>{

    const navigate = useNavigate();

    const backBtnHandler = () =>{
        navigate(-1);
    }

    return(
        <div>
            <button className="backbtn" type="button" onClick={backBtnHandler}>Go Back</button>
        </div>
    )
}

export default BackBtn;