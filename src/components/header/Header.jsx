import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="flex items-center justify-between z-100">
      <IconButton>
        <PersonIcon fontSize="large" className="p-0.8" />
      </IconButton>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt=""
        className="h-9 object-contain"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="p-0.8" />
      </IconButton>
    </div>
  );
}

export default Header;
