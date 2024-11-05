import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <div>
     <Header/>
     <div className='top-page-div'>
                <h1 className=' top-page-div-innerText'>About Us</h1>
            </div>

        <div className=' py-24 px-small-screen lg:px-tab-screen xl:px-screen-content  flex flex-col gap-20'>
         
            <div className=' photo-text-combination-container'>
                  <div className=' lg:flex-1'>
                        <img src="https://www.lemosys.com/img/lemos1.png"  className=' rounded-xl' alt="" />
                  </div>
                   <div className='lg:flex-1 flex flex-col gap-10'>
                        <h1 className=' text-button_color font-semibold text-3xl'> About Us</h1>
                        <h2 className=' text-gray-900 font-semibold text-6xl'>About Lemosys Infotech</h2>
                        <p className='  text-xl font-medium'>Lemosys Infotech is ISO Certified company having their operations in India and United States, company was formed in 2007 with a aims to be the highest quality software development company in the world for excellent services and delivering standard value to customers, employees and our associates. Lemosys is top IT company in Asia. Company has reached best world class practice in the field of web and mobile applications services.
                      <p className=' mt-5'>Web designing and development being the main company activity, We provide a range of scripts for launching e-commerce sites and shopping carts which includes Group buying, Deal aggregator, Micro job site and online bidding.</p>
</p>
                   </div> 
            </div>

            <div className=' photo-text-combination-container '>
                  <div className=' footer:flex-1 flex gap-5'>
                        <img src="https://www.lemosys.com/img/lem2.png"  className=' rounded-xl' alt="" />
                        <img src="https://www.lemosys.com/img/lem3.png"  className=' rounded-xl' alt="" />

                  </div>
                   <div className='flex-1 flex flex-col gap-10'>
                        <h2 className=' text-gray-900 font-semibold text-6xl'>Lemosys Infotech is also involved in the campaign of social activities</h2>
                        <p className='  text-xl font-medium'>like Swachh Bharat Abhiyan (Clean India) , Blood Donation, Green India and many other activities. Lemosys Infotech Pvt. Ltd have more than 45 young, dynamic and talented team providing valuable services in the field of Mobile applications, website development in all popular CMS and framework in emerging market.</p>
                   </div> 
            </div>



            <div className=' photo-text-combination-container '>
                  <div className=' lg:flex-1 lg:flex gap-5'>
                        <img src="https://www.lemosys.com/img/success.png"  className=' rounded-xl' alt="" />

                  </div>
                   <div className='flex-1 flex flex-col gap-10'>
                        <h2 className=' text-gray-900 font-semibold text-6xl'>Our Secret Of Success</h2>
                        <p className='  text-xl font-medium'>The standard quality of our services reflects valuable efforts we put into every aspects of understanding requirement , development and delivery. We provide excellent support to our clients after service in best possible manner with personalized as well as professional approach. This effort helps us to reach benchmark of top IT company in India.</p>
                   </div> 
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default About