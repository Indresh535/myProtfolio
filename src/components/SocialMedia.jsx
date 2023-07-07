import React from "react";
import { BsTwitter,BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const socialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter/>
      </div>
      <div>
      <a href="https://github.com/" target='_blank' rel="noreferrer">
        <BsGithub />
        </a>
      </div>
      <div>
      <a href="https://github.com/" target='_blank' rel="noreferrer">
      <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default socialMedia;
