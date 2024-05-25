import React from 'react'
import {FaArrowRight} from "react-icons/fa"
const PrimaryButton = () => {
  return (
    <div className='flex items-center group '>
      <button  className=' bg-primary h-[40px] text-white  px-3 py-2' >Chose your Meal Plan</button>
      <FaArrowRight className='inli-block group-hover:!translate-x-2 duration-200 text-base h-[40px] bg-primaryDark text-white '/>
    </div>
  )
}

export default PrimaryButton
