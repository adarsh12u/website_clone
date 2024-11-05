import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import LetsTalk from './LetsTalk'

const Product = () => {
  return (
    <div>
    <Header/>
    <div className=' top-page-div'>
               <h1 className=' top-page-div-innerText'>Our Products</h1>
           </div>

       <div className=' py-24 px-small-screen lg:px-tab-screen xl:px-screen-content  flex flex-col gap-20'>
        
           <div>
               
                  <div className='flex-1 flex flex-col gap-10'>
                       <h1 className=' text-button_color font-semibold text-3xl'> Our Products</h1>
                       <h2 className=' text-gray-900 font-semibold text-6xl'>We provide latest technology to
                       provide best solution of various business</h2>
                       <p className='  text-xl font-medium'>Lemosys Infotech involve in product development of latest technology to provide best solution of various business and utility mobile apps. Our in-house product "Restaurant App House" provide one stop solution to create your own app , website and ordering management system just in quick time. We have developmany religious mobile app and useful apps like "Power Nap" to regain energy "Tasbihat" to recite prayer,"Speed Tracker" to track your speed source and many more apps.</p>
                  </div> 
           </div>



   <div className=' p-36  w-70vw  shadow-2xl flex gap-10'>
            <div className='flex-1 flex flex-col gap-10 pl-10'>
                   <h2 className=' text-xl text-gray_for_text font-semibold'>App Development</h2>
                   <h1 className='text-gray-900 font-semibold text-6xl'>Lorem ipsum dolor sit amet consectetur,?</h1>
                   <p className=' text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, omnis doloribus exercitationem minima dicta a obcaecati minus ipsum ea voluptas saepe perspiciatis repellendus expedita earum. Eveniet enim optio ab repudiandae cumque? Sapiente nemo dolorum voluptatibus! Eius, vel? Excepturi ullam iste animi atque labore? Suscipit cupiditate explicabo, sed vel necessitatibus laudantium!</p>
            </div>
            <div className=' flex-1'>
                 <img src="https://www.lemosys.com/img/objects.png" alt="" />
            </div>
   </div>

       </div>
       <Testimonial/>
       <LetsTalk/>
       <Footer/>
       </div>  )
}

export default Product