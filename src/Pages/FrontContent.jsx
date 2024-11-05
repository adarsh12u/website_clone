import React from 'react'
import { logo } from '../data'

const FrontContent = () => {
  return (
    <div className=' h-[90vh]  bg-front_color flex justify-center items-center  flex-col gap-5  ' >
      <div className=' w-w-60% xl:w-w-35% flex  gap-20 flex-col '>
        <div className=' flex flex-col gap-10'>
          <div>

            <h1 className=' text-3xl md:text-6xl  footer:text-9xl text-white text-center font-semibold'>Lets Talk!

            </h1>
            <div className=' h-1 w-24 md:h-2 md:w-40 footer:h-3  m-auto mt-3  footer:w-52 bg-button_color rounded-full'></div>
          </div>

          <p className=' text-center text-xl md:text-2xl font-semibold text-white'>Are you looking to build a Custom Web or Mobile App for your business? Let us develop it for you.</p>

          <div className=' flex flex-col  gap-5 md:flex-row md:justify-around'>
            <button className='   text-xs px-5 py-1 md:px-10 md:py-3 rounded-full md:font-medium  border-2 text-white border-white '>
              VIEW PORTFOLIO
            </button>
            <button className=' text-xs px-5 py-1 md:px-10 md:py-3 rounded-full md:font-medium  border-2 text-white border-white '>
              REQUEST A QUOTE
            </button>
          </div>
        </div>
        <div>

          <p className=' text-center text-xl text-white font-medium'>Our expertise has been recognized by all. Work with Lemosys, and we’ll do our part to make your project worthy of high praise, too.</p>
        </div>
      </div>
      <div className=' mt-10'>
        <img src={logo} />
      </div>
    </div>
  )
}

export default FrontContent