import { useState } from 'react';
import './contact.scss';

function Contact() {

    const [message,setMessage] = useState(false)
    
    const submitHandler = (e)=> {
        e.preventDefault();
        setMessage(true)
    }


    

    return (
        <div className="contact" id='contact'>
            <div className="left">
                <img src="assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit"> Send </button>
                    {message && <span> Thanks for reaching out :) I will soon get back to you! </span>}
                </form>
            </div>
            
        </div>
    )
}

export default Contact
