import React from 'react'
import './headerstyle.css'



export default function header() {
    return (
        <div className='stickyNav'>
            <header className='headerStyle'>
                <div>
                    <nav>
                        <ul className = 'ulContainer'>
                            <li><a className = '' href="localhost:3000">HOME</a></li>
                            <li><a className = '' href="localhost:3000">ABOUT</a></li>
                            <li><a className = '' href="localhost:3000">ROOMS</a></li>
                            <li><a className = '' href="localhost:3000">SERVICES</a></li>
                            <li><a className = '' href="localhost:3000">GALLERY</a></li>
                            <li><a className = '' href="localhost:3000">SEE & DO</a></li>
                            <li><a className = '' href="localhost:3000">CONTACT</a></li>
                            <li><a className="bookRoomButton" href="localhost:3000">Book A Room</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
