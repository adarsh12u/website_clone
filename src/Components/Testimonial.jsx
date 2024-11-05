import React from 'react'
import { CarousalData } from '../data'
import Carousal from './Carousal'

const Testimonial = () => {
  return (
    <div className=' lightGray-page-container'>
      <div className='container-for-heading-or-subheading'>
        <h1 className=' heading-tech'>TESTIMONIALS</h1>
        <h2 className=' subHeading-text'>Client love us & we love them</h2>
        <p className='  text-gray_for_text  text-center    text-2xl '>Our customers are our first priority and we keep them in mind with every decision we make. Hear what they have to say.</p>
      </div>
      <div className=' w-full semi-md:w-80% mt-10'>
         
      {/* <div className=' flex gap-10'>
          {
            CarousalData.map((data , index)=>{
              return <Carousal key={index} data={data}/>               
            })
          }
      </div> */}
          </div>
    </div>
  )
}

export default Testimonial