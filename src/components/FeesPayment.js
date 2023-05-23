import React from "react";
import classes from "./FeesPayment.module.css";
import InputForm from "./InputForm";

const FEATURES = [
  "Become an Industry-Certified Digital Marketer",
  "1:1 Mentoring Session with Trainers",
  "Syllabus curated by Real World Experts",
  "250+ Hiring Partners such as Nykaa, Zomato, Kinnect",
  "Craft a Winning Resume with Customised Feedback",
  "Interview Preparation with Hiring Expert",
  "Master 20+ Core Digital Marketing Tools",
  "No Prior Experience/Knowledge required",
];

function FeesPayment() {
  return (
    <div className={classes.mainContainer}>
      <div>
        <h2>Fees and Financing</h2>
        <hr />
      </div>

      <div className={classes.wrapperContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.container1}>
            <div className={classes.childCont}>
              <p>Fees:</p>
              <h3>Rs.85,000</h3>
            </div>
            <div className={classes.childCont}>
              <p>Start Date</p>
              <h3>May 31, 2023</h3>
            </div>
          </div>
          <div className={classes.container2}>
            <h4>What's Included</h4>
            <h5>Features/Benefits</h5>
            <ul>
              {FEATURES.map((feature) => (
                <>
                  {/* <span>✔️</span> */}
                  <li>✔️{feature}</li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default FeesPayment;
