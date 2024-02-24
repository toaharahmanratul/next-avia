import React from "react";
import styles from "./styles/consultancy.module.css";
import Link from "next/link";

const AreasOfConsultancy = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1>OUR AREAS OF CONSULTANCY</h1>
      <div className={`${styles.cardDiv}`}>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/legislation.jpg" alt="" />
          <h2>Legislation</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/organization.jpg" alt="" />
          <h2>Organization</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/personnel_lincensing.jpg" alt="" />
          <h2>Personnel Licensing</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/operations_of_aircraft.jpg" alt="" />
          <h2>Operations of Aircraft</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/airworthiness_of_aircraft.jpg" alt="" />
          <h2>Airworthiness of Aircraft</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/air_navigation_services.jpg" alt="" />
          <h2>Air Navigation Services</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/aerodrome_&_ground_aids.jpg" alt="" />
          <h2>Aerodrome & Ground Aids</h2>
        </Link>
        <Link href="#" className={`${styles.card}`}>
          <img src="/images/aircraft_accident_investigation.jpg" alt="" />
          <h2>Aircraft Accident Investigation</h2>
        </Link>
      </div>
    </div>
  );
};

export default AreasOfConsultancy;
