import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/e-mail.png";
import Address from "../../img/address.png";
import instagram from "../../img/instagram.png"

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
   

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_gj75vqn", 
                "template_nfuutrn", 
                formRef.current, 
            {
                publicKey: "4palxvV5q9NQIKB9A",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setDone(true)
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">For more detailed information</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +90 541 966 18 03
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            iremaydnx@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Istanbul / Türkiye
                        </div>

                        <div className="c-info-item">
                            <img className="c-icon" src={instagram} alt="" />
                            englishwithiremm
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What is your dream?</b>  Get in touch. Let's rediscover English together and in a fun way.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && <span className="thank-you-message">Thank You.. Your message has been sent!</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;