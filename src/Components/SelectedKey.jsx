import React from "react";
import {
  customCrm,
  ecommerce,
  graficDesign,
  mobileData,
  webDevelopment,
} from "../data";

const SelectedKey = ({ Projectkey }) => {
  if (Projectkey === "all") {
    return <All />;
  } else if (Projectkey === "MA") {
    return <CustomImageShow data={mobileData}  />;
  } else if (Projectkey === "GD") {
    return <CustomImageShow data={graficDesign}  />;
  } else if (Projectkey === "WD") {
    return <CustomImageShow data={webDevelopment} />;
  } else if (Projectkey === "E-Comm") {
    return <CustomImageShow data={ecommerce} />;
  } else {
    return <CustomImageShow data={customCrm} />;
  }
};




const CustomImageShow = ({ data }) => {
  console.log("0-0-0-", data)
  return (
    <div className=" grid grid-cols-2 gap-5">
      {data.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};

const All = () => {
  return (
    <div className=" flex flex-col gap-10">
      <CustomImageShow data={mobileData} />
      <CustomImageShow data={graficDesign}/>
      <CustomImageShow data={ecommerce}/>
      <CustomImageShow data={customCrm}/>
      <CustomImageShow data={webDevelopment}/>
    </div>
  );
};

export default SelectedKey;
