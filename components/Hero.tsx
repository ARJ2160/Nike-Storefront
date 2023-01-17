import React from "react";
import Button from "@mui/material/Button";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { data } from "../assets/data";

const Hero = () => {
  return (
    <div className="flex sm:text-left text-center sm:justify-start justify-center items-center p-2 h-screen hero">
      <div className="sm:pl-24 mb-20 m-10">
        <h1 className="md:text-5xl text-3xl sm:w-1/2">{data.hero.title}</h1>
        <p className="sm:w-1/2 mt-5">{data.hero.subText}</p>
        <Button className="w-auto h-10 p-8 mt-10 bg-black" variant="contained">
          <ArrowForwardIosRounded className="pr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
