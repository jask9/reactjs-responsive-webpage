import React from "react";
import classes from "./SyllabusTerms.module.css";

function SyllabusTerms(props) {
  return (
    <>
      <div className={classes.termContainer}>
        <hr />
        <h4>{props.term}</h4>
        <p>{props.summary}</p>

        {/* Modules Covered Collapsible */}

        <div>
          <p>
            <button
              className={`${"btn btn-primary"} ${classes.expandBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${props.id}`}
            >
              Modules Covered:
            </button>
          </p>
          <div className="collapse" id={props.id}>
            <div className="card card-body">
              <ul className={classes.list}>
                {props.topics.map((topic, index) => (
                  <li className={classes.listItems} key={index}>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SyllabusTerms;
