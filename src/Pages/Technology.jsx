import React from "react";
import { videoUrl } from "../data";

const Technology = () => {
  return (
    <div className=" main-page-container">
      <div className=" container-for-heading-or-subheading">
        <h1 className="heading-tech mt-5">Technology We Use</h1>
        <h2 className=" subHeading-text">
          Hire website development company in India with most in-demand
          technologies
        </h2>
      </div>
      <div>
        <video
          className=" h-video w-video"
          src={videoUrl}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default Technology;
