import React from "react";
import SyllabusTerms from "./SyllabusTerms";
import classes from "./Syllabus.module.css";

const TERMS_DATA = [
  {
    id: "1",
    term: "Term 1",
    summary:
      "In this term, you will learn how to ace search marketing, campaign planning and ecommerce.",
    topics: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization",
      "Key Performance Marketing Jargon",
      "Search Engine Marketing",
      "Campaign Planning",
      "Presentation Making",
      "Ecommerce",
      "Live Project: Search Marketing",
    ],
  },
  {
    id: "2",
    term: "Term 2",
    summary:
      "After mastering Term 1, you will progress to ace social media marketing and content strategy.",
    topics: [
      "Content Strategy",
      "Copywriting",
      "Canva",
      "Social Media Marketing Organic",
      "ORM",
      "Influencer Marketing",
      "Resume Making",
      "Interview Skills",
    ],
  },
  {
    id: "3",
    term: "Term 3",
    summary:
      "In this last term, you will learn ads, analytics and present an in-class final project to the jury.",
    topics: [
      "Social Media Marketing Paid",
      "Social Analytics",
      "Google Analytics",
    ],
  },
];

function Syllabus() {
  return (
    <div className={classes.container1}>
      {/* Basic intro */}

      <div className={classes.topContainer}>
        <h2>Online Digital Marketing Course Syllabus</h2>
        <hr width="10%" color="#012d36" size="8" align="left" />
        <p>
          Our hybrid digital marketing course is designed to teach students the
          basics to the advanced level concepts of digital marketing with
          practice assignments and offline in-class projects.
        </p>
      </div>

      {/* Syllabus Terms */}

      <div className={classes.container2}>
        <div className={classes.leftContainer}>
          {TERMS_DATA.map((data) => (
            <div>
              <SyllabusTerms
                key={data.id}
                id={data.id}
                term={data.term}
                summary={data.summary}
                topics={data.topics}
              />{" "}
            </div>
          ))}
        </div>
        <div className={classes.rightContainer}>
          <div className="row">
            <div className={`${"col-lg-6 col-md-12"} ${classes.smallBox}`}>
              <h4>100+</h4>
              <p>HOURS OF LIVE LEARNING</p>
            </div>
            <div className={`${"col-lg-6 col-md-12"} ${classes.smallBox}`}>
              <h4>7+</h4>
              <p>BRAND PROJECTS</p>
            </div>
          </div>

          <div className="row">
            <div className={`${"col-lg-6 col-md-12"} ${classes.smallBox}`}>
              <h4>50+</h4>
              <p>HOURS OF VIDEO LEARNING</p>
            </div>
            <div className={`${"col-lg-6 col-md-12"} ${classes.smallBox}`}>
              <h4>Download</h4>
              <p>Detailed course syllabus and trainer list</p>
              <button className="btn btn-primary">GET SYLLABUS</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Syllabus;
