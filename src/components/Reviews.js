import React from "react";
import classes from "./Reviews.module.css";
import ReviewCard from "./ReviewCard";

const REVIEW_DATA = [
  {
    id: "2",
    name: "Riya Gupta",
    position: "Account Manager",
    company: "Zomato",
    review:
      "“With the best professors and management, I learned a lot while experiencing what it was like in the industry. After joining IIDE, you will always be helped each step of the way. They really do come as a package deal with the best team of industry trainers, best placements and if lucky enough also a bunch of great friends.”",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: "3",
    name: "Tina Sharma",
    position: "Digital Marketing Executive",
    company: "OnePlus",
    review:
      "“Today my responsibilities at work have increased and I work closely with the CEO to service large brands like Standard Chartered Bank, Dream 11, Wills Lifestyle.”",
    rating: "⭐⭐⭐⭐",
  },
];

function Reviews() {
  return (
    <>
      <div className={classes.mainContainer}>
        <h2>Student Reviews</h2>
        <hr width="10%" color="#012d36" size="8" align="left" />

        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className={classes.card}>
                <ReviewCard
                  id="1"
                  name="Akshita Singhania"
                  position="Account Executive"
                  company="Kinnect"
                  review="“I want to thank the Placement team at IIDE. Not only did they prepare me for interviews but they also guided me towards all career opportunities and helped me choose what's best for me. ”"
                  rating="⭐⭐⭐⭐⭐"
                />
              </div>
            </div>

            {REVIEW_DATA.map((review) => (
              <div class="carousel-item">
                <div className={classes.card}>
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    name={review.name}
                    position={review.position}
                    company={review.company}
                    review={review.review}
                    rating={review.rating}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Reviews;
