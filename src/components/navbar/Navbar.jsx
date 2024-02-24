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
        </li>
        <li className={`${styles.li}`}>
          <Link href="/team">Our Team</Link>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/career">Career</Link>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/about">About NextAvia</Link>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/feedback">Feedback</Link>
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
