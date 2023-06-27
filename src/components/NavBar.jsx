import React, { useState } from "react";
import "./Style.css";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <button>Home</button>
        <button>Moments</button>
        <button>Notifications</button>
        <button>Messages</button>
      </div>
      <div>
        <Icon className="twitterBird" path={mdiTwitter} size={1} />
      </div>
      <div className="navRight">
        <input placeholder="Search Twitter"></input>
        <img src="" alt="dp" />
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default NavBar;
