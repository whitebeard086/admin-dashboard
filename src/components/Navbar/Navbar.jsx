import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
            <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
            <div className="navbarIconContainer">
                <NotificationsNone />
                <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconContainer">
                <Language />
                <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconContainer">
                <Settings />
            </div>
            <img src="https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="profile picture" className="navbarAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
