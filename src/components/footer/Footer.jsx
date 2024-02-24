import React from "react";
import styles from "./styles/footer.module.css";
import { LiaCopyright } from "react-icons/lia";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.floatDiv}`}>
        <h1>Join NextAvia Today</h1>
      </div>
      <div className={`${styles.footerContentDiv}`}>
        <div className={`${styles.footerInfoDiv}`}>
          <h1>NextAvia</h1>
          <p>
            <LiaCopyright /> Copyright. All rights reserved.
          </p>
        </div>
        <div className={`${styles.servceDiv}`}>
          <h2>Services</h2>
          <p>Organization</p>
          <p>Personnel Licensing</p>
          <p>Operations of Aircraft</p>
          <p>Airworthiness of Aircraft</p>
          <p>Air Navigation Services</p>
          <p>Aerodrome & Ground Aids</p>
          <p>Aircraft Accident Investigation</p>
        </div>
        <div className={`${styles.socialDiv}`}>
          <h1>Follow Us</h1> <br />
          <div className={`${styles.linksDiv}`}>
            <Link href="#">
              <ImFacebook2 />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaInstagramSquare />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaSquareGooglePlus />
            </Link>
            <Link href="#">
              <PiGlobeBold />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
