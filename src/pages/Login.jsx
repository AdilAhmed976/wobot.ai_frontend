import React from 'react'
import '../css/login.css';
import { Icon } from '../components/Logo';
export const Login = () => {
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
                                <label>Your Name</label>
                                <input placeholder='e.g John Doe' />    
                            </div>
                            <div className='boxes' >
                                <label>Your Name</label>
                                <input placeholder='e.g John Doe' />    
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
