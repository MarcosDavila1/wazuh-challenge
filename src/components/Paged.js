import React, { useEffect } from "react";
import styles from "../styles/paged.module.css";

function Paged({ itemsPerPage, countries, paged, handleSelect }) {
  const pageNumber = [];

  for (let i = 0; i <= countries / itemsPerPage - 1; i++) {
    pageNumber.push(i + 1);
  }

  useEffect(() => {
    const primerPagina = document.getElementById("paged0");
    if (primerPagina) {
      primerPagina.className = "active";
    }
  }, []);

  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        {pageNumber?.map((n, i) => (
          <button
            id={`paged${i}`}
            className={styles.btn}
            onClick={() => {
              return paged(n), handleSelect(`paged${i}`);
            }}
            key={n}
          >
            {n}
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default Paged;
