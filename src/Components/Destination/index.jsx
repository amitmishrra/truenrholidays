import React from 'react'

export default function Destination({ description, title, image, path }) {
  return (
    <div className='md:p-8 pt-[80px] px-4'>
      <div className='cursiveFont text-[55px] md:text-[60px] text-[#246883] pl-2'>
        {title}
      </div>

      <div className='flex flex-col justify-between items-center md:flex-row'>
        <div className='textFont w-[100%] md:w-1/2 mx-4 text-justify'>
          {description}
        </div>
        <div className='w-[100%] md:w-1/2 mx-4'>
          <img src={`/${image}`} className="w-[80%] rounded-[10px] shadow-xl" alt="img" />
        </div>
      </div>
    </div>
  )
}
