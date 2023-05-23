import React from "react";
import classes from "./Introduction.module.css";

import awardImg from "../../assets/award.jpg";
import googleLogo from "../../assets/google-logo.jpg";
import nsdcLogo from "../../assets/nsdc-logo.jpg";
import bannerImg from "../../assets/banner-image.png";

function Introduction() {
  return (
    <>
      <div className={classes.mainContainer}>
        {/* left column*/}
        <div className={classes.leftContainer}>
          <img
            className={classes.awardImg}
            src={awardImg}
            alt="number-1-institute"
          />
          <h1>
            Online Digital Marketing Course with Certificate and Placements
          </h1>
          <p>
            India's best Online Digital Marketing Course taught by industry
            experts in a comprehensive and question-oriented format.
          </p>
          <p>100% Job Assistance | Video Lectures + Live Online Sessions</p>
          <p className="red">Scholarship Deadline : May 26, 2023</p>
          <button type="button" className="btn btn-primary">
            Download Brochure
          </button>

          <div className={classes.approvalContainer}>
            <div className={classes.approval}>
              <p>Certificate in Alignment with</p>
              <img
                className={classes.logo}
                src={googleLogo}
                alt="google-logo"
              />
            </div>
            <div className={classes.approval}>
              <p>Approved by</p>
              <img className={classes.logo} src={nsdcLogo} alt="nsdc-logo" />
            </div>
          </div>
        </div>

        {/* right column*/}
        <div className={classes.rightContainer}>
          <img
            className={classes.bannerImg}
            src={bannerImg}
            alt="girl-with-a-book"
          />
        </div>
      </div>

      <div className={classes.bottomContainer}>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h3>1,00,000+</h3>
            <p>Students Trained</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3>100%</h3>
            <p>Placement Assistance</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3>May 31, 2023</h3>
            <p>Start Date</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3>7:00 PM to 9:00 PM</h3>
            <p>Lecture Timings(IST)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
