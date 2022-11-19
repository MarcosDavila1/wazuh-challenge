import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, clearUserDetail } from "../actions";
import styles from "../styles/users.module.css";
import Loading from "./Loading";

function User(props) {
  const dispatch = useDispatch();
  let userDetail = useSelector((state) => state.userDetail);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getUserById(id));
    return () => {
      clearUserDetail();
    };
  }, [dispatch, id]);

  if (!userDetail.length) {
    return <Loading />;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.rows}>
          <h4>Id</h4>
          <h4>Name</h4>
          <h4>Username</h4>
          <h4>Email</h4>
          <h4>Address</h4>
          <h4>Phone</h4>
          <h4>Website</h4>
          <h4>Company</h4>
        </div>
        {userDetail.map((user) => {
          return (
            <div key={user.id} className={styles.list}>
              <h4>{user.id}</h4>
              <h4>{user.name}</h4>
              <h4>{user.username}</h4>
              <h4>{user.email}</h4>
              <h4>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}, {user.address.geo.lat},
                {user.address.geo.lng}
              </h4>
              <h4>{user.phone}</h4>
              <h4>{user.website}</h4>
              <h4>
                {user.company.name}, {user.company.catchPhrase},{" "}
                {user.company.bs}
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
