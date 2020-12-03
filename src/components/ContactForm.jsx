import React from 'react'
import Form from 'react-bootstrap/Form'
import './contact.css'

export default function ContactForm() {
    return (
        <div className='contactPage'>
            <div className="gridContainer">
                
                <div></div>
                <div>
                    <h1>Contact Us</h1>
                </div>
                <div></div>

                <div>
                    <span><em>info@mysite.com</em></span>
                </div>

                <div>
                    <span><em>500 Terry Francois Street, San Francisco, CA 94158</em></span>
                </div>

                <div>
                    <span><em>Tel: 123-456-7890 </em></span>
                </div>

            </div>
            <div className='formContainer'> 
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Name'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder='Subject'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={8} />
                    </Form.Group>
                </Form>
                <br/><br/><br/>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509917.877622835!2d-123.7978802184839!3d37.18429277271675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1607019287274!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" title="s" ></iframe>
            <footer className='footerClass'>
                <br/>
                <div className='footerContainer'>
                    <center> 2023 by Anton & Lily. </center>
                </div>
            </footer>
        </div>
    )
}
