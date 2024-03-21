import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Suggestion = ({text}) => {
  return (
    <div className='flex gap-2 align-center text-center py-auto text-richblack-900 border rounded-full border-richblack-50 w-fit px-4 py-1'>
      {text}
      <IoIosSearch className='h-6'/>
    </div>
  )
}

export default Suggestion
