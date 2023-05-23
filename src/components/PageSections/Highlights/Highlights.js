import React from "react";
import classes from "./Highlights.module.css";
import HighlightsItems from "./HighlightsItems";

const LIST1 = [
  "Become an Industry-Certified Digital Marketer",
  "1:1 Mentoring Session with Trainers",
  "Syllabus curated by Real World Experts",
  "250+ Hiring Partners such as Nykaa, Zomato, Kinnect",
];

const LIST2 = [
  "Craft a Winning Resume with Customised Feedback",
  "Interview Preparation with Hiring Expert",
  "Master 20+ Core Digital Marketing Tools",
  "No Prior Experience/Knowledge required",
];

function Highlights() {
  return (
    <div className={classes.mainContainer}>
      <div>
        <h2>Key Highlights</h2>
        <hr width="10%" color="#012d36" size="8" align="left" />
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <ul>
            {LIST1.map((listItem, index) => (
              <HighlightsItems key={index} listItem={listItem} />
            ))}
          </ul>
        </div>
        <div className="col-lg-4 col-sm-6">
          <ul>
            {LIST2.map((listItem, index) => (
              <HighlightsItems key={index} listItem={listItem} />
            ))}
          </ul>
        </div>

        <div className={`${"col-lg-4 col-sm-12"} ${classes.downloadBox}`}>
          <p>Get familiar with our online digital marketing course syllabus.</p>
          <button type="button" className="btn btn-primary">
            Download Brochure
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Highlights;
