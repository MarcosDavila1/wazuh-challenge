import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/landingpage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Wazuh Challenge</h1>
        <Link to={"/home/users"} className={styles.btn}>
          Ingresar
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
