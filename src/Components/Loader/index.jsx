import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center flex-col items-center h-[100vh]'>
      <div>
        <img src="/assets/loader.gif" className='w-[70%] m-auto' alt="" /></div>
        <div className="textFont text-[21px] text-[#44c3f3]">Loading Assets...</div>
      
    </div>
  )
}
