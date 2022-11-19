import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../actions";
import styles from "../styles/listTasks.module.css";
import Loading from "./Loading";
import Paged from "./Paged";
import SearchBar from "./SearchBar";

function ListTasks() {
  const dispatch = useDispatch();
  const { tasks, users } = useSelector((state) => state);

  //PAGINADO
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const lastCountry = currentPage * itemsPerPage; // 1 * 10 = 10
  const firstCountry = lastCountry - itemsPerPage; // 10 - 10 = 0
  const currentCountrys = tasks.slice(firstCountry, lastCountry);

  const paged = (page) => {
    setCurrentPage(page);
  };

  //CSS CLASS PAGINA ACTUAL
  function handleSelect(id) {
    const btns = document.getElementsByTagName("button");
    for (const btn of btns) {
      btn.classList.remove("active");
      btn.classList.add("btn");
    }
    const elem = document.getElementById(id);
    elem.className = "active";
  }

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  if (!tasks.length) {
    return <Loading />;
  } else {
    return (
      <div className={styles.container}>
        <SearchBar paged={paged} />
        <div className={styles.columns}>
          <h4>Id</h4>
          <h4>User Id</h4>
          <h4>Title</h4>
          <h4>Completed</h4>
        </div>
        {currentCountrys.map((task) => {
          return (
            <Fragment key={task.id}>
              <ol className={styles.list}>
                <li>{task.id}</li>
                <li>{task.user_id}</li>
                <li>{task.title}</li>
                <li>{task.completed ? "Yes" : "No"}</li>
              </ol>
            </Fragment>
          );
        })}
        <Paged
          itemsPerPage={itemsPerPage}
          countries={tasks.length}
          paged={paged}
          handleSelect={handleSelect}
        />
      </div>
    );
  }
}

export default ListTasks;
