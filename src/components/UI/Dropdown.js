import React from "react";
import classes from "./Dropdown.module.css";

function Dropdown(props) {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>
        <a href="#">{props.title}</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
      <div className={classes.dropdownContent}>
        <ul>
          {props.links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
