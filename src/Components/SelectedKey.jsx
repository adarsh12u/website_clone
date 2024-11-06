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
    return <MobileApp />;
  } else if (Projectkey === "GD") {
    return <GraficDesign />;
  } else if (Projectkey === "WD") {
    return <WebDevelopment />;
  } else if (Projectkey === "E-Comm") {
    return <Ecommerce />;
  } else {
    return <CustomCrm />;
  }
};

const MobileApp = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      {mobileData.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};

const CustomCrm = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      {customCrm.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};

const Ecommerce = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      {ecommerce.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};

const WebDevelopment = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      {webDevelopment.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};

const GraficDesign = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      {graficDesign.map((url, index) => {
        return <img className=" rounded-xl" key={index} src={url} alt="" />;
      })}
    </div>
  );
};
const All = () => {
  return (
    <div className=" flex flex-col gap-10">
      <MobileApp />
      <CustomCrm />
      <Ecommerce />
      <WebDevelopment />
      <GraficDesign />
    </div>
  );
};

export default SelectedKey;
