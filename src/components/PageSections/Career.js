import React, { useState } from "react";
import classes from "./Career.module.css";

function Career() {
  const [isReadMore, setReadMore] = useState(false);

  function readMoreHandler() {
    setReadMore(true);
  }

  return (
    <div className={classes.mainContainer}>
      <h2>Career Opportunities after IIDE's Online Digital Marketing Course</h2>
      <hr width="10%" color="#012d36" size="8" align="left" />

      <p>
        IIDE's online digital marketing course provides 100% placement
        assistance to all the students who opt for it. Under the placement
        assistance, students attend placement workshops hosted by HR executives
        of famous brands, undergo mock interview training & also get their
        resumes tailored to perfection.
      </p>
      {!isReadMore && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={readMoreHandler}
        >
          Read More...
        </button>
      )}

      {isReadMore && (
        <>
          <p>
            If you are a working professional & are bored by the mundane growth
            in your current industry, completing this course will help you get
            familiar with the digital marketing industry & also get placed
            faster than job portals. If you are already a digital marketer &
            think there is a gap between what you know and what's happening in
            the industry, this online course will bridge the gap. You can take
            this course while working by opting for the weekend batches. And for
            college students, this online digital marketing course is the
            perfect way to add a futuristic skill to your resume. Also, by
            opting for 100% placement assistance, you can get an internship with
            brands such as Nykaa, GoZoop, OnePlus, etc.
          </p>
          <p>
            You will also be equipped to excel in roles such as:
            <ul>
              <li>Social Media Associate</li>
              <li>Influencer</li>
              <li>Marketing Associate</li>
              <li>Jr Social Media Associate</li>
              <li>Executive - PR and Digital Media </li>
              <li>SEO Executive</li>
              <li>ORM Executive </li>
              <li>Account Executive</li>
            </ul>
          </p>

          <h2>Digital Marketing Salary</h2>
          <p>
            The highest package offered to students of IIDE's online course is
            INR 7 LPA as of May 2023 IIDE students get placed at an average of
            INR 3-4 LPA compared to an average package of INR 2.4 LPA. This is
            because our curriculum is aligned with the latest industry trends
            and includes hands-on projects that provide practical experience to
            students. Read Less
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setReadMore(false)}
          >
            Read Less
          </button>
        </>
      )}
      <hr />
    </div>
  );
}

export default Career;
