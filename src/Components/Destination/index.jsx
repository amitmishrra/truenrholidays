import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
export default function Destination({ description, title, image, duration, places, offer, pricing }) {
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
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]"> Offer : &nbsp; <span className='textFont  text-justify text-black font-light'>{offer}</span></li>
            <li className="headingFont font-bold text-[16px] mt-4 text-[#246883]">Pricing : &nbsp; <span className='textFont  text-justify text-black font-light'>{pricing}</span></li>
          </div>
          <div className='mt-4 textFont'> For more information please <NavLink className={"text-[#246883]"} to="/contact"> contact us</NavLink>. </div>
        </div>
        <div className='w-[100%] md:w-1/2 mx-8 mb-8'>
          <img src={`/${image}`} className=" rounded-[10px] shadow-xl" alt="img" />
        </div>
      </div>

      <div className="bookingSection mb-8">
        <div className="cursiveFont text-[55px] md:text-[60px] text-center mt-8 text-[#246883]"> Book Now </div>

        <form className="form w-[90%] md:w-[50%] flex flex-col textFont m-auto p-4 rounded-[10px] shadow-2xl py-8">
          <input className='inputs w-[97%] md:w-[350px] shadow-md' required  placeholder='Full Name' type="text" />
          <input className='inputs w-[97%] md:w-[350px] shadow-md' required placeholder='Email' type="mail" />
          <input className='inputs w-[97%] md:w-[350px] shadow-md' required placeholder='Number' type="tel" />
          <input className='inputs w-[97%] md:w-[350px] shadow-md' required placeholder='Passangers' type="number" />
          <input className='inputs w-[97%] md:w-[350px] shadow-md' required placeholder='Date' type="date" />

          <div className='w-[90%] md:w-[350px] m-auto mt-4'>
            <button type='submit' className='exploerButton'>Book Now</button>
          </div>
        </form>


      </div>



    </div>
  )
}
