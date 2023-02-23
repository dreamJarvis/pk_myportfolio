import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const form = useRef();
    const notify = () => toast("Message Sent!");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_btmyjr9', 'template_gj2o03d', form.current, '7aL6LFVluF5YQLFVw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className='sendbtn' type="submit" value="Send" onClick={notify} />
            <ToastContainer />
        </form>
    );
};

export default ContactUs