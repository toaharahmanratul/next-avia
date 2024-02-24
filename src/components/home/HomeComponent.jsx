"use client";
import React from "react";
import styles from "./styles/home-component.module.css";
import Carousel from "./Corousel";
import AreasOfConsultancy from "./AreasOfConsultancy";
import OurTeam from "./OurTeam";

const HomeComponent = () => {
  return (
    <div>
      <div className={`${styles.courselDiv}`}>
        <Carousel />
      </div>
      <div>
        <AreasOfConsultancy />
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default HomeComponent;
