import React, { useState } from 'react'
import '../css/login.css';
import { Icon } from '../components/Logo';

export const Login = () => {
const [location , setLocation] = useState("")
  return (

    <div>
        <div className='background_container'>
            <div className='background_main'>
                <div className='top' ></div>
                <div className='bottom'></div>
            </div>
        </div>

        <div className='form_container' >
            <div className='form_container_box' >
                <div className='form_container_box_logo' >
                    <img src="https://wobot.ai/wobot_logo_blue.svg" alt="logo" srcset="" />
                </div>
                <div className='form_container_box_form' >
                        <div className='form' > 
                            <div>
                                <Icon/>
                            </div>
                            <div>
                                <text >
                                    It's a delight to have you onboard
                                </text>
                            </div>
                            <div>
                                <text >
                                    Help us to know you better.
                                </text>
                            </div>
                            <div>
                                <text >
                                    (This is how we optimize Wobot as per your business needs)
                                </text>
                            </div>
                            <div className='boxes' >
                                <label>Your Name</label>
                                <input placeholder='e.g John Doe' />    
                            </div>
                            <div className='boxes' >
                                <label>Company Name</label>
                                <input placeholder='e.g John Doe' />    
                            </div>
                            <div className='boxes' >
                                <label>Industry</label>
                                <input list="Industry" name="Industry" />
                                    <datalist id="Industry">
                                        <option value="Internet Explorer"/>
                                        <option value="Firefox"/>
                                        <option value="Chrome"/>
                                        <option value="Opera"/>
                                        <option value="Safari"/>
                                    </datalist> 
                            </div>
                            <div className='boxes' >
                                <text>Number of locations</text>
                                <div>
                                    <button 
                                        style={{
                                            backgroundColor:location== "1-20" ? "#3766e8" : "white",
                                            color:location== "1-20" ? "white" : "black",
                                        }}
                                        onClick={()=>setLocation("1-20")} 
                                    >
                                        1-20
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor:location== "21-50" ? "#3766e8" : "white",
                                            color:location== "21-50" ? "white" : "black",
                                        }} 
                                        onClick={()=>setLocation("21-50")} >
                                            21-50
                                    </button>
                                    <button 
                                        style={{
                                            backgroundColor:location== "51-200" ? "#3766e8" : "white",
                                            color:location== "51-200" ? "white" : "black",
                                        }}
                                        onClick={()=>setLocation("51-200")} >
                                            51-200
                                    </button>
                                    <button 
                                        style={{
                                            backgroundColor:location== "201-500" ? "#3766e8" : "white",
                                            color:location== "201-500" ? "white" : "black",
                                        }}
                                        onClick={()=>setLocation("201-500")} >
                                            201-500
                                    </button>
                                    <button 
                                        style={{
                                            backgroundColor:location== "500" ? "#3766e8" : "white",
                                            color:location== "500" ? "white" : "black",
                                        }}
                                        onClick={()=>setLocation("500")} >
                                            500+
                                    </button>
                                </div>
                                <button className='submit' >Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
