// import "./style.css"
import React from 'react';
import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import MuiAlert from '@mui/material/Alert';
import ContactIcons from '../../Components/Contact';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [btnActive, setBtnActive] = useState(true);
    const [sent, setSent] = useState(false);
    const [valid, setValid] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = () => {
        setOpen(false);
    };

    let messageData = {
        from_name: name,
        mail: email,
        message: msg
    }

    const handleClick = () => {
        if (name.length <= 3) {
            setMessage("Name is too short.");
            setOpen(true);
            setValid(false);
        }
        else if (!email.includes("@" && ".")) {
            setMessage("email must contain @ and .");
            setOpen(true);
            setValid(false);
        }
        else if (msg.length < 1) {
            setMessage("please enter message");
            setOpen(true);
            setValid(false);
        }
        else {
            setValid(true);
        }
    }

    const sendMessage = () => {

        handleClick();

        if (valid) {
            emailjs.send("service_ygxsvyg", "template_z9pd26t", messageData, "4_OJS42EnesA_bld3")
                .then((result) => {
                    console.log(result.text);
                    setSent(true);
                    setMessage("Message Sent")
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <>
            <div className="contactpage flex flex-col lg:flex-row justify-center  h-screen items-center">
                <div className="left-side w-[90%] lg:w-1/2 flex flex-col justify-between mb-4 lg:mb-0 m-auto text-center mt-0">
                    <div className="contactText w-[75%] m-auto">
                        <div className='cursiveFont text-[55px] md:text-[60px] text-[#246883] pl-2'>
                          Let's connect!
                        </div>
                        <div className="textFont text-justify md:w-[50%]  m-auto">
                           Need to get in touch? We'd love to hear from you. Here's how you can reach us...
                        </div>
                    </div>

                    <div className="contactBox w-[95%] flex flex-col justify-around m-auto mt-[30px] pb-[20px]">
                        <div className="form flex flex-col md:w-[66%] w-[100%] m-auto justify-around rounded-[10px] shadow-xl py-4">
                            <input
                                // required
                                type="text"
                                className='inputs w-[97%] md:w-[80%] shadow-md'
                                placeholder="Full Name"
                                onChange={e => {
                                    setName(e.target.value)
                                    setBtnActive(true)
                                }}
                            />
                            <input
                                type="mail"
                                className='inputs w-[97%] md:w-[80%] shadow-md'
                                placeholder="Email"
                                onChange={e => {
                                    setMail(e.target.value)
                                    setBtnActive(true)
                                }}
                            />
                            <textarea
                                type="text"
                                className='inputs w-[97%] md:w-[80%] h-[200px] shadow-md'
                                placeholder="Your Message"
                                onChange={e => {
                                    setMsg(e.target.value)
                                    setBtnActive(true)
                                }}
                            />

                            <div className="SendButton flex justify-end items-center w-[80%] my-8">
                                <button onClick={sendMessage} className={sent ? "booked" : 'bookButton'} disabled={sent ? true : false} >{sent ? "Sent ✓" : "Send"}</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="right-side lg:w-1/2 flex flex-col lg:flex-row justify-center items-center pb-4">
                    <ContactIcons />
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={valid ? "success" : "error"} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
export default Contact