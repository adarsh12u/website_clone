import React from 'react'
import { FaCode } from "react-icons/fa";
const Card = ({ data }) => {
  return (
    <div className=' h-72   w-width_card       shadow-2xl rounded-xl flex flex-col  items-center justify-between  py-5'>
      <div className={` rounded-full h-20 w-20 bg-${data.color} flex justify-center items-center`}>

        <FaCode size={25} />
      </div>
      <div className=' w-60%'>
        <p className=' text-center text-xl'>{data.content}</p>
      </div>
      <button className={`text-white rounded-full px-6 py-3  bg-${data.color}`}>Read more</button>
    </div>
  )
}

export default Card