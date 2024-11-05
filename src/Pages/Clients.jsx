import React from 'react'
import { clientData } from '../data'

const Clients = () => {
    return (
        <div className=' main-page-container '>
            <div className='container-for-heading-or-subheading'>
                <h1 className=' text-5xl  font-extrabold text-black'>Our Trusted Clients</h1>
                <h2 className=' text-center heading-tech '>Lemosys Infotech strives to cater the needs of clients in the best possible manner. What we practically do is pretty simple as an experienced website development and web designing company in India. But at the same time incredibly complex and professional. Hire Lemosys to create your company website in minutes.</h2>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 footer:grid-cols-6 mt-12 '>
                {
                    clientData.map((url, index) => {
                        return <div key={index} className='  h-36 w-40  md:h-48  flex justify-center items-center  border md:w-56'>
                            <img src={url} alt="" />

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Clients