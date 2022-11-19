import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterTasks, getAllTasks } from "../actions";
import styles from "../styles/searchbar.module.css";
import Filtros from "./Filtros";

function SearchBar({ paged }) {
  const dispatch = useDispatch();
  const { tasks, users } = useSelector((state) => state);

  const [taskTitle, setTaskTitle] = useState("");
  const [showSearch, setshowSearch] = useState("");
  const [userSearch, setUserSearch] = useState(0);
  const [input, setInput] = useState(false);

  function handleChange(e) {
    setTaskTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filter = tasks.filter((task) =>
      task.title.toLowerCase().includes(taskTitle.toLowerCase())
    );
    if (filter) {
      dispatch(filterTasks(input, taskTitle));
      setshowSearch(taskTitle);
      setTaskTitle("");
      paged(1);
    } else {
      setTaskTitle("");
      alert("No se ha encontrado ninguna tarea con ese título");
    }
  }

  function clearTitleSearch() {
    setshowSearch("");
    dispatch(filterTasks(input));
  }

  function completedChange() {
    setInput(() => !input);
    dispatch(
      filterTasks(
        !input,
        showSearch !== "" ? showSearch : userSearch !== 0 ? userSearch : ""
      )
    );
    paged(1);
  }

  function handleChangeUser(e) {
    const value = e.target.value;
    const filter = users.filter((user) => user.name === value);
    if (filter.length) {
      dispatch(filterTasks(input, filter[0].id));
      setUserSearch(filter[0].id);
      paged(1);
    } else {
      dispatch(getAllTasks());
    }
  }

  console.log(
    showSearch !== "" ? showSearch : userSearch !== 0 ? userSearch : ""
  );
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ingrese un título ..."
            value={taskTitle}
            onChange={handleChange}
          />
          <button className={styles.btn} type="submit">
            Buscar
          </button>
        </form>
        {typeof showSearch !== "number" ? (
          <Link to={"/home/tasks"} onClick={() => clearTitleSearch()}>
            {showSearch}
          </Link>
        ) : null}
        <label>Completed</label>
        <input
          type="checkbox"
          name="completed"
          value={input}
          onChange={completedChange}
        />
      </div>
      <Filtros handleChangeUser={handleChangeUser} />
    </>
  );
}

export default SearchBar;
