import React from 'react'
import Card from '../Components/Card'
import { cardData } from '../data'

const OurServices = () => {
    return (
        <div className='lightGray-page-container'>
            <div className='container-for-heading-or-subheading'>
                <h1 className=' heading-tech'>Our Services</h1>
                <h2 className='subHeading-text'>We’ve ton of features
                    for give you the best Services</h2>
                <p className=' text-gray_for_text  text-center    text-2xl '>We provide highly professional services of the latest technology for web services to make your business more efficient and unique. We believe client service is not just a department but it’s a responsible job hence we maintain all possible high quality standards.</p>
            </div>
            <div className='  grid grid-cols-1 gap-10  justify-items-center md:grid-cols-2    xl:flex xl:justify-around mt-10  w-w-80% '>
                {
                    cardData.map((data, index) => {
                        return <Card key={index} data={data} />
                    })
                }
            </div>
        </div>
    )
}

export default OurServices