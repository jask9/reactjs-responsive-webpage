import React from "react";
import classes from "./ReviewCard.module.css";

import avatar from "../../../assets/avatars/girl1.png";

function ReviewCard(props) {
  return (
    <>
      <div className={classes.mainCard}>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <div>
          <h3>{props.name}</h3>
          <p>{props.position}</p>
          <p>{props.company}</p>
        </div>
      </div>
      <div className={classes.revDetail}>
        <p>{props.review}</p>
        <p>{props.rating}</p>
      </div>
    </>
  );
}

export default ReviewCard;
