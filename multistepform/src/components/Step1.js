import React, { useContext } from 'react'
import '../styles/step1styles.css'
import LeftSection from './LeftSection'
import {useLocation} from 'react-router-dom'
import Button from './Button'
import DataContext from './DataContext'

const Step1 = () => {

    const location = useLocation();

    const {data, setData} = useContext(DataContext);
    
    const handleChange = (e) =>{
        if(e.target.name==="name"){
            setData((prev)=>({...prev, name: e.target.value}))
            if(e.target.value!==""){
                setData((prev)=>({...prev, nameerror:""}))
            }
        }
        else if(e.target.name==="email"){
            setData((prev)=>({...prev, email: e.target.value}))
            if(e.target.value!==""){
                setData((prev)=>({...prev, emailerror:""}))
            }
        }
        else if(e.target.name==="phone") {
            setData((prev)=>({...prev, phone: e.target.value}))
            if(e.target.value!=""){
                setData((prev)=>({...prev, phoneerror:""}))
            }
        }
    }
    


    return(
        <div className='fullwrapper'>
            <div className='container'>
                <div className='leftsection'>
                <LeftSection choosen={location.pathname==="/"?"1":""}/>
                </div>

                <form className='rightsection'>
            
                    <div className='header'>Personal info</div>
                    <div className='addtext'>Please provide your name, email address, and phone number.</div>

                    <div className='textfields'>
                        <div className='textfield'>
                        <div className='inputandrequired'><label htmlFor='name'>Name</label> {data.nameerror==="y"?<div className='reqfield'>This field is required</div>:""}</div>
                        <input type="text" className={data.nameerror==="y"?"errorinput":""} id='name' name='name' value={data.name} placeholder='e.g. Stephen King' onChange={handleChange}></input>
                        </div>
                        <div className='textfield'>
                        <div className='inputandrequired'><label htmlFor='email'>EmailAddress</label> {data.emailerror==="y"?<div className='reqfield'>This field is required</div>:""}</div>
                        <input type="text" className={data.emailerror==="y"?"errorinput":""} id='email' name='email' value={data.email} placeholder='e.g. stephenking@lorel.com' onChange={handleChange}></input>
                        </div>
                        <div className='textfield'>

                        <div className='inputandrequired'><label htmlFor='phone'>PhoneNumber</label> {data.phoneerror==="y"?<div className='reqfield'>This field is required</div>:""}</div>
                        <input type="number" className={data.phoneerror==="y"?"errorinput":""} id='phone' name='phone' value={data.phone} placeholder='e.g. +1 234 567 890' onChange={handleChange}></input>

                        </div>
                    </div>

                   <Button/>

                </form>
            </div>
        </div>
    )
}
export default Step1