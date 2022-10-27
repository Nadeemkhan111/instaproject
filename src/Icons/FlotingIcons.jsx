import React from "react";
import "../Icons/FlotingIcons.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from '@mui/icons-material/Google';
const FlotingIcons = () => {
  return (
    <div className="bodyI">
      <ul>
        <li>
          <a href="">
            <i>
              <FacebookIcon className="fab" />
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <TwitterIcon className="fab"/>
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <InstagramIcon className="fab"/>
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <GoogleIcon className="fab"/>
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FlotingIcons;
