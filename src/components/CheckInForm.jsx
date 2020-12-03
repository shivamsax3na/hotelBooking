import React from 'react'
import CheckIn from './CheckIn'
import './checkinClass.css'

export default function CheckInForm() {
    return (
        <div>
            <form action="">
                <div className='checkinContainer'>        
                    <div><CheckIn Check="CheckIn" /></div>
                    <div><CheckIn Check="CheckOut" /></div>
                    <div>
                        <br/>
                        <label>Adults</label> <br />
                        <input type="number" value="2"/>
                    </div>
                    <div>
                        <br/>
                        <label>Kids</label> <br />
                        <input type="number" value="2"/>
                    </div>
                    <div>
                        <br /><br/>
                        <button className="checkInFormButton" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
