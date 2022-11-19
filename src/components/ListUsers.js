import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../actions";
import styles from "../styles/listUsers.module.css";
import Loading from "./Loading";

function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (!users.length) {
    return <Loading />;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.columns}>
          <h4>Id</h4>
          <h4>Name</h4>
          <h4>Company</h4>
          <h4>Email</h4>
        </div>
        {users.map((user) => {
          return (
            <Fragment key={user.id}>
              <Link className={styles.link} to={`/home/users/${user.id}`}>
                <ol className={styles.list}>
                  <li>{user.id}</li>
                  <li>{user.name}</li>
                  <li>{user.company.name}</li>
                  <li>{user.email}</li>
                </ol>
              </Link>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default ListUsers;
