import React from "react";

const Carousal = ({ data }) => {
  return (
    <div className="  flex flex-col  justify-around p-10 h-[30rem] bg-white rounded-xl">
      <div>
        <h1 className=" text-xl  font-medium ">{data.content}</h1>
      </div>
      <div className=" flex gap-5">
        <div>
          <img
            src={data.image}
            className=" rounded-full width_underline h-10"
            alt=""
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <h2>CEO & CO-FOUNDER</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
