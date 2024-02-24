import React from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`${styles.mainContainer}`}>
      <Link href="/" className={`${styles.logoDiv}`}>
        <img src="/images/logo_no_bg.png" className={`${styles.logo}`} />
        <div className={`${styles.logoTextDiv}`}>
          <h1 className="">NextAvia</h1>
          <p className="">A leading aviation solution</p>
        </div>
      </Link>

      <ul className={`${styles.ul}`}>
        <li className={`${styles.li}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/services">Our Services</Link>
          <div className={`${styles.dropdown}`}>
            <div className={`${styles.dropdownContent}`}>
              <Link href="/home-link1">
                <p>Air Law Consultancy</p>
              </Link>
              <Link href="/home-link2">
                <p>Aviation Regularity</p>
              </Link>
              <Link href="/home-link2">
                <p>Air Travelers' Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Airline Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Airport Consulting Providen's</p>
              </Link>
              <Link href="/home-link2">
                <p>Air Navigation Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Aviation & Environment</p>
              </Link>
              <Link href="/home-link2">
                <p>Ground Handling Service Providen's Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Safety and FLight Operations Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Research & Development</p>
              </Link>
              <Link href="/home-link2">
                <p>Aviation Security Consulting</p>
              </Link>
              <Link href="/home-link2">
                <p>Cargo Handling</p>
              </Link>
            </div>
          </div>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/team">Our Team</Link>
          <div className={`${styles.dropdown}`}>
            <div className={`${styles.dropdownContent}`}>
              <Link href="/home-link1">
                <p>SMGR</p>
              </Link>
              <Link href="/home-link2">
                <p>AVM</p>
              </Link>
              <Link href="/home-link2">
                <p>CAS</p>
              </Link>
              <Link href="/home-link2">
                <p>ASDey</p>
              </Link>
              <Link href="/home-link2">
                <p>Goa</p>
              </Link>
              <Link href="/home-link2">
                <p>Inu</p>
              </Link>
              <Link href="/home-link2">
                <p>Niru</p>
              </Link>
            </div>
          </div>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/career">Career</Link>
          <div className={`${styles.dropdown}`}>
            <div className={`${styles.dropdownContent}`}>
              <Link href="/home-link1">
                <p>Vacancies</p>
              </Link>
              <Link href="/home-link2">
                <p>Apply Now</p>
              </Link>
            </div>
          </div>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/about">About NextAvia</Link>
          <div className={`${styles.dropdown}`}>
            <div className={`${styles.dropdownContent}`}>
              <Link href="/home-link1">
                <p>Overview</p>
              </Link>
              <Link href="/home-link2">
                <p>Vision & Mission</p>
              </Link>
              <Link href="/home-link2">
                <p>FAQ's</p>
              </Link>
              <Link href="/home-link2">
                <p>Latest News and Highlights</p>
              </Link>
            </div>
          </div>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/feedback">Feedback</Link>
          <div className={`${styles.dropdown}`}>
            <div className={`${styles.dropdownContent}`}>
              <Link href="/home-link1">
                <p>Give Your Feedback</p>
              </Link>
            </div>
          </div>
        </li>
        <Link href="/login" className={`${styles.loginRegister}`}>
          Login
        </Link>
        <Link href="/login" className={`${styles.loginRegister}`}>
          Register
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
