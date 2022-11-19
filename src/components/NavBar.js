import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../actions";

function NavBar() {
  const dispatch = useDispatch();

  function clearTitleSearch() {
    dispatch(getAllTasks());
  }

  return (
    <div className={styles.container}>
      <Link className={styles.wazuh} to={"/"}>
        Wazuh Challenge
      </Link>
      <Link className={styles.btn} to={"/home/users"}>
        Users
      </Link>
      <Link
        className={styles.btn}
        to={"/home/tasks"}
        onClick={() => clearTitleSearch()}
      >
        Tasks
      </Link>
    </div>
  );
}

export default NavBar;
