import React from 'react'
import { countData } from '../data'

const LetsTalk = () => {
    return (
        <div className=' bg-gray_for_text flex flex-col justify-center  items-center'>
            <div className=' grid grid-cols-2  md:flex gap-5 xl:w-w-50% xl:justify-between  mt-28  border-b border-black pb-10 '>
                {countData.map((data, index) => {
                    return <div key={index} className=' flex flex-col gap-5 justify-center items-center'><h1 className=' text-lg  md:text-xl font-bold lg:text-3xl lg:font-extrabold text-white'>{data.data}</h1>
                        <p className='md:text-lg xl:text-2xl text-white'>{data.text}</p>
                    </div>
                })}
            </div>

            <div className=' mt-10 flex flex-col gap-5 justify-center mb-28 '>
                <div>

                    <h3 className='  text-center text-2xl semi-md:text-4xl text-white'>Got any project requirements?</h3>
                    <h1 className=' sm:text-5xl  xl:text-8xl text-white'>We're here to help.</h1>
                </div>

                <div className=' flex justify-center mt-10'>
                    <button className='button-rounded'>Let's talk</button>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk