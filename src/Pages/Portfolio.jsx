import React, { useState } from 'react'
import { buttonData } from '../data'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SelectedKey from '../Components/SelectedKey'

const Portfolio = () => {
    const [key, setKey] = useState('all')
    return (
        <div className=' bg-slate-50 '>
            <Header />
            <div className=' top-page-div  polygon-design '>
                <h1 className=' top-page-div-innerText '>Our Portfolio</h1>
            </div>
            <div className='  flex lg:flex-row flex-col  gap-10  px-small-screen lg:px-tab-screen xl:px-screen-content mt-20 mb-20      '>
                <div className=' flex w-full flex-col gap-12  lg:h-screen lg:sticky   lg:top-all-projects-spacing'>
                    <h1 className=' text-3xl font-bold text-gray_for_text'>Recent Projects</h1>
                    <p className=' text-2xl  font-medium'>Explore Our Portfolio for Website and Mobile App Development Work</p>
                    <div className=' grid grid-cols-2 p-10 bg-white shadow-xl gap-5 rounded-xl'>{
                        buttonData.map((data) => {
                            return <button className=' button-rounded'     onClick={() =>{ setKey(data.key)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }} key={data.key}>{data.text}</button>
                        })
                    }
                    </div>
                </div>
                <div>
                    <SelectedKey Projectkey={key} />
                </div>
            </div>
            <Footer />
        </div>)
}

export default Portfolio