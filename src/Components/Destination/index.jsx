import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

export default function Destination({ description, title, image, duration, places, offer, pricing, hotelType, start }) {

  useEffect(() => {
    document.title = "True NR Holidays | " + title
  }, [])

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [passenger, setPassenger] = useState('');
  // const [date, setTravelDate] = useState('');
  const [address, setAddress] = useState('');
  const [hotel, setHotel] = useState('');
  const [budget, setBudget] = useState('');

  const [message, setMessage] = useState('Please enter valid details.');
  const [valid, setValid] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [booked, setBooked] = useState(false);
  // const [dateType, setDateType] = useState('text');

  let messageData = {
    name: name,
    mail: mail,
    number: number,
    passengers: passenger,
    city : address,
    hotel: hotel,
    budget: budget,
    destination: title,
  }

  const handleClose = () => {
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  useEffect(() => {
    validate();
  }, [name, mail, number, passenger, address, hotel, budget])

  const validate = () => {
    console.log(name, mail, number, passenger, address, hotel, budget)
    if (name.length <= 3) {
      setMessage('Please enter valid name.');
      setValid(false);
    }

    else if (!mail.includes('@') || !mail.includes('.')) {
      setMessage('Please enter valid email.');
      setValid(false);
    }

    else if (number.length !== 10 || isNaN(number)) {
      setMessage('Please enter valid number.');
      setValid(false);
    }

    else if (passenger.length === 0 && passenger == 0) {
      setMessage('Please enter number of passengers.');
      setValid(false);
    }
    else if (hotel.length === 0) {
      setMessage('Please select a hotel type.');
      setValid(false);
    }
    else if (budget.length === 0) {
      setMessage('Please select a budget.');
      setValid(false);
    }
    else if (address.length === 0) {
      setMessage('Please enter your departure City.');
      setValid(false);
    }
    else {
      setValid(true);
    }
  }

  // const sendMsgToUser = () => {
  //   emailjs.send('service_ygxsvyg', 'template_8x8x9x9', messageData, '4_OJS42EnesA_bld3')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }


  const sendMessage = () => {
    emailjs.send('service_ygxsvyg', 'template_vvl4n62', messageData, '4_OJS42EnesA_bld3')
      .then((result) => {
        console.log(result.text);
        setBooked(true);
        setMessage('Your booking has been confirmed. Please check your email for more details.');
        setOpen(true);
      }, (error) => {
        console.log(error.text);
        setBooked(false);
        setValid(false);
        setMessage('Something went wrong. Please try again.');
        setOpen(true);
      });
  }

  const handleSubmit = () => {
    if (valid) {
      sendMessage();
    }
    else{
      setOpen(true);
    }
  }

  return (
    <div className='md:p-8 pt-[80px] px-4'>
      <div className='cursiveFont text-[55px] md:text-[60px] text-[#246883] pl-2'>
        {title}
      </div>

      <div className='flex flex-col-reverse justify-between items-center md:items-start md:flex-row px-2 md:px-0'>
        <div className='flex flex-col w-[100%] md:w-1/2 mx-4'>
          <div className='textFont  text-justify'>
            {description}
          </div>
          <div className="headingFont font-bold text-[20px] mt-4 text-[#246883]">
            Package Details
          </div>
          <div>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]"> Duration :  &nbsp; <span className='textFont  text-justify  text-black font-light'>{duration}</span> </li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]"> Places :  &nbsp; <span className='textFont  text-justify text-black font-light'>{places}</span> </li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]">Hotel : &nbsp; <span className='textFont  text-justify text-black font-light'>{hotelType}</span></li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]">Starting Point : &nbsp; <span className='textFont  text-justify text-black font-light'>{start}</span></li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]"> Offer : &nbsp; <span className='textFont  text-justify text-black font-light'>{offer}</span></li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]">Pricing : &nbsp; <span className='textFont  text-justify text-black font-light'>{pricing}</span></li>
          </div>
          <div className='mt-4 textFont'>This cost is based on 02 people Travelling Together. <br /> For more information please <NavLink className={"text-[#246883]"} to="/contact"> contact us</NavLink>. </div>
        </div>
        <div className='w-[100%] md:w-1/2 mx-8 mb-8'>
          <img src={`/${image}`} className=" rounded-[10px] shadow-xl" alt="img" />
        </div>
      </div>

      <div className="bookingSection mb-8">
        <div className="cursiveFont text-[55px] md:text-[60px] text-center mt-8 text-[#246883]"> Book Now </div>

        <div className="form w-[90%] md:w-[40%] flex flex-col textFont m-auto p-4 rounded-[10px] shadow-2xl py-8">
          <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder='Full Name' type="text" value={name}  onChange={(e) => { setName(e.target.value); }} />
          <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder='Email' type="mail" value={mail} onChange={(e) => { setMail(e.target.value); }} />
          <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder='Number' type="tel" value={number} onChange={(e) => { setNumber(e.target.value);}} />
          <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder='No. of Passengers' type="number" value={passenger} minLength="1" onChange={(e) => { setPassenger(e.target.value); }} />
          {/* <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder="MM/DD/YYYY" onFocus={()=>{setDateType("date")}}  type={dateType} value={date} onChange={(e) => { setTravelDate(e.target.value); validate(); }} /> */}
          <input className='inputs w-[97%] md:w-[80%] shadow-md' required placeholder='Departure city' type="text" value={address} onChange={(e) => { setAddress(e.target.value);}} />
          <select className='inputs w-[97%] md:w-[80%] shadow-md' required value={hotel} onChange={(e) => { setHotel(e.target.value); }}>
            <option value="" disabled selected>Select Hotel</option>
            <option value="5 Star">5 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="3 Star">3 Star</option>
          </select>

          <select className='inputs w-[97%] md:w-[80%] shadow-md' required value={budget} onChange={(e) => { setBudget(e.target.value); }}>
            <option value="" disabled selected>Select Budget</option>
            <option value="Less than ₹15,000">Less than ₹15,000</option>
            <option value="Medium - ₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
            <option value="High - ₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
            <option value="Luxury-₹50,000 - More">₹50,000 - More</option>
          </select>

          <div className='w-[90%] md:w-[80%] m-auto mt-4'>
            <button onClick={handleSubmit} className={booked ? "booked" : 'bookButton'} disabled={booked ? true : false} >{booked ? "Booked ✓" : "Book Now"}</button>
          </div>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={valid ? "success" : "error"} sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  )
}
