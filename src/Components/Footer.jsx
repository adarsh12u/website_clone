import React from "react";
import { cardData, companyLogo } from "../data";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 pt-10  ">
      <div className="">
        <div className="  px-footer-content">
          <img src={companyLogo} alt="image donot load" />
        </div>
      </div>
      <div className=" w-screen  px-footer-content   mb-20 mt-20  semi-md:flex semi-md:flex-row semi-md:justify-between flex flex-col gap-12 md:grid md:grid-cols-2 ">
        <div className=" semi-md:w-w-20%">
          <h1 className=" text-white text-2xl">Contact Details</h1>
          <div className="  w-width_underline h-1  bg-footer_color"></div>

          <div className=" mt-5 flex flex-col gap-3">
            <h3 className=" text-white text-lg">+91-123456790</h3>
            <h3 className=" text-white text-lg">Lemosys_Infotech</h3>

            <h3 className=" text-white text-lg">Whatsapp</h3>
          </div>
        </div>
        <div className=" semi-md:w-w-20%">
          <h1 className=" text-white text-2xl">Contact Details</h1>
          <div className="  w-width_underline h-1 bg-blue-900"></div>
          <div>
            <p className=" mt-5 text-white text-lg">
              Head Office: Plot 169, Scheme 78, Part II, Behind Kanak Hospital
              Indore, M.P. India 452010
            </p>
          </div>
        </div>
        <div className=" semi-md:w-w-20%">
          <h1 className=" text-white text-2xl">Services</h1>
          <div className="  w-width_underline h-1 bg-blue-900"></div>
          <div className=" mt-5 flex flex-col gap-2">
            {cardData.map((data, index) => {
              return (
                <p key={index} className=" text-lg text-white">
                  {data.content}
                </p>
              );
            })}
          </div>
        </div>
        <div className=" semi-md:w-w-20%">
          <h1 className=" text-white text-2xl">Subscribe To Our Newsletter</h1>
          <div className="  w-width_underline h-1 bg-blue-900"></div>
          <div className="  mt-5">
            <p className="text-lg text-white">
              Stay updated with the latest technology trends and topics with us.
            </p>
            <div className=" mt-6">
              <label htmlFor="message" className=" text-white font-semibold">
                {" "}
                Email:{" "}
              </label>
              <input
                type="text"
                name="message"
                placeholder=" Email Address"
                className=" bg-transparent border-b-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black px-small-screen py-5 flex   flex-col semi-md:flex-row gap-5  justify-between">
        <div>
          <p className=" text-center text-white">
            ©2024 Lemosys. All Rights Reserved Website Development Company
          </p>
        </div>
        <div className=" flex justify-center gap-5">
          <p className=" text-white">privacy policy</p>
          <p className=" text-white">career</p>
          <p className=" text-white">FAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
