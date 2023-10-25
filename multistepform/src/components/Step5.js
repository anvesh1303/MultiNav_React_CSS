import React from 'react'
import LeftSection from './LeftSection';
import '../styles/step1styles.css'

const Step5 = () =>{


    return(
        <div className="fullwrapper">
            <div className="container">
                <div className='leftsection'>
                    <LeftSection/>
                </div>

                <div className="step5-rightsection">
                    <div className='greeting-block'>
                        <div className='border-greeting'>
                            <div className='border-double'>
                                <div className='check-mark'>&#10003;</div>
                            </div>
                        </div>
                    <div className='greeting'>Thank you!</div>
                    <div className='greeting-txt'>
                        Thanks for confirming your subscription! We hope you have <br/>
                        fun using our platform. If you ever need support, please feel <br/>
                        free to email us at support@loremgaming.com.
                     </div>
                     </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Step5