import React, { useState } from 'react'
import { cardData, companyLogo, links } from '../data'
import { Link, useNavigate } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
      const [showServices, setShowServices] = useState(false)
      const [menu , setMenu] = useState(false)
      const navigate = useNavigate()
      return (
            <header className='  bg-front_color flex   items-center z-40  h-header   justify-between top-0 sticky'>

                  <div className=' w-20% ml-10'>
                        <img src={companyLogo} className=' cursor-pointer' alt=""  onClick={()=>navigate('/')}/>
                  </div>
                  <div className=' hidden  gap-12 w-60% xl:flex justify-center relative'>
                        {
                              links.map((value, index) => {
                                    return value.name === 'Services' ? <div className=' relative'>
                                          <Link className='   text-white text-xl hover:text-button_color transition-all  font-bold  ' onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)} key={index} to={value.href}>{value.name}</Link>
                                          {
                                                showServices &&
                                                <div className=' absolute transition-all ease-in-out delay-500 border border-black   z-50   bg-white top-16  w-44'>
                                                      {cardData.map((data, index) => {
                                                            return <p key={index} className='  text-black text-base border-b border-black p-5 '>{data.content}</p>
                                                      })}
                                                </div>
                                          }
                                    </div> : <Link className=' hover:text-button_color transition-all  font-bold  text-white text-xl ' key={index} to={value.href}>{value.name}</Link>
                              })
                        }

                  </div>
                  <div className=' w-20% hidden xl:flex  mr-10 items-center gap-3'>
                        <p className=' text-white  font-bold' > +91-(413)-234567890</p>
                        <button className='button-rounded'>Let's talk</button>
                  </div>
                  <div className=' inline-block xl:hidden pr-6'>
                         <RiMenu3Line color='white' size={35} onClick={()=>setMenu(!menu)}/>
                  </div>

                  <div className=  {`flex py-10 transition-all delay-150 ease-linear flex-col absolute ${menu ? '  top-heading-spacing' : 'top-[-500px]'} w-screen bg-white rounded-md  items-center justify-center  gap-12  `}>
                        {
                              links.map((value, index) => {
                                    return value.name === 'Services' ? <div className=' relative'>
                                          <Link className='   text-black  text-xl hover:text-button_color transition-all  font-bold  ' onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)} key={index} to={value.href}>{value.name}</Link>
                                          {
                                                showServices &&
                                                <div className=' absolute transition-all ease-in-out delay-500   z-50   bg-white top-16  w-44'>
                                                      {cardData.map((data, index) => {
                                                            return <p key={index} className='  text-black text-base border-b border-black p-5 '>{data.content}</p>
                                                      })}
                                                </div>
                                          }
                                    </div> : <Link className=' hover:text-button_color transition-all  font-bold  text-black  text-xl ' key={index} to={value.href}>{value.name}</Link>
                              })
                        }

                  </div>
            </header>
      )
}

export default Header

