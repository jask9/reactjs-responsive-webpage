import React, { useState } from "react";
import Dropdown from "./Dropdown";

import classes from "./Header.module.css";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  function openNavHandler() {
    setOpenNav(true);
  }

  function closeNavHandler() {
    setOpenNav(false);
  }

  const hamburgerMenuBtn = (
    <span className={classes.menuBtn} onClick={openNavHandler}>
      &#9776;
    </span>
  );

  const responsiveSideNavbar = (
    <div className={classes.sideNav} id="sideNav">
      <a href="#" className={classes.closeBtn} onClick={closeNavHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </a>
      <h4>
        <a href="#">About</a>
      </h4>

      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Student Life</a>
        </li>
        <li>
          <a href="#">Teachers & Mentors</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
      <h4>
        <a href="#">Knowledge Portal</a>
      </h4>

      <ul>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Case Studies</a>
        </li>
        <li>
          <a href="#">Presentations</a>
        </li>
      </ul>
      <h4>
        <a href="#">Work with Us</a>
      </h4>
      <h4>
        <a href="#">Contact Us</a>
      </h4>
    </div>
  );

  return (
    <nav>
      <div className={classes.navlinks1}>
        <div className={classes.logo}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-columns-gap"
              viewBox="0 0 16 16"
            >
              <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
            </svg>
          </a>
        </div>
        <span >
          <Dropdown
            title="Programs"
            links={[
              "Digital Marketing",
              "Free Live Masterclass",
              "Find a Course",
              "Customised Trainings",
            ]}
          />
        </span>
      </div>
      {!openNav ? hamburgerMenuBtn : responsiveSideNavbar}
      <div className={classes.navlinksRow}>
        <ul className={classes.navlinks2}>
          <li>
            <span>
              <Dropdown
                title="About"
                links={[
                  "About Us",
                  "Student Life at IIDE",
                  "Teachers and Mentors",
                  "Testimonials",
                ]}
              />
            </span>
          </li>
          <li>
            <span>
              <Dropdown
                title="Placements"
                links={["Our Recruiters", "Placement Report"]}
              />
            </span>
          </li>
          <li>
            <a href="#">Hire from Us</a>
          </li>
          <li>
            <a href="#">Work with Us</a>
          </li>
          <li>
            <span>
              <Dropdown
                title="Knowledge Portal"
                links={["Blogs", "Case Studies", "Presentations"]}
              />
            </span>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
