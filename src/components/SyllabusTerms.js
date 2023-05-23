import React from "react";
import TermModules from "./TermModules";

function SyllabusTerms(props) {
  return (
    <div>
      <h4>{props.term}</h4>
      <p>{props.summary}</p>

      {/* Modules Covered Collapsible */}

      <div>
        <p>
          <button
            className="btn btn-primary"
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
              <ul>
                <li key={props.id}>{topic}</li>{" "}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* <TermModules id={props.id} topics={props.topics} /> */}
    </div>
  );
}

export default SyllabusTerms;
