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
              data-bs-target="#collapseExample"
            >
              Modules Covered:
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              {props.topics.map((topic) => (
                <ul className={classes.list}>
                  <li className={classes.listItems} key={props.id}>
                    {topic}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SyllabusTerms;
