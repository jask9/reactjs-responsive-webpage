import React from "react";
import classes from "./ToolsSection.module.css";

import Annie from "../assets/tools/App-Annie.jpg";
import Buffers from "../assets/tools/Buffer.png";
import FacebookAds from "../assets/tools/Facebook-Ads.jpg";
import GoogleAds from "../assets/tools/Google-Ads.jpg";
import GoogleAnalytics from "../assets/tools/Google-Analytics.jpg";
import GoogleConsole from "../assets/tools/Google-Search-Console.jpg";
import Grammarly from "../assets/tools/Grammarly.png";
import HootSuite from "../assets/tools/HootSuite.png";
import MailChimp from "../assets/tools/MailChimp.jpg";
import Shopify from "../assets/tools/Shopify.webp";
import Spyfu from "../assets/tools/Spyfu.jpg";
import TwitterAds from "../assets/tools/Twitter-Ads.jpg";

const tools = [
  Annie,
  Buffers,
  FacebookAds,
  GoogleAds,
  GoogleAnalytics,
  GoogleConsole,
  Grammarly,
  HootSuite,
  MailChimp,
  Shopify,
  Spyfu,
  TwitterAds,
];

function ToolsSection() {
  return (
    <div className={classes.toolsContainer}>
      <h2>Tools You'll Master</h2>
      <hr width="10%" color="#012d36" size="8" align="left" />

      <div className={classes.gridContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={classes.gridItem}>
            <img src={tool} alt={tool} />
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
}

export default ToolsSection;
