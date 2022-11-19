import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions";
import styles from "../styles/filtros.module.css";

function Filtros({ handleChangeUser }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        defaultValue="Sort by User"
        onChange={handleChangeUser}
      >
        <option disabled={false}>Sort by User</option>
        {users?.length !== 0 &&
          users?.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filtros;
