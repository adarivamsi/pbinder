import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function SwipeOptions() {
  return (
    <div className="fixed bottom-12 flex w-full justify-between">
      <IconButton className="bg-white shadow-xl">
        <ReplayIcon className="p-0.5 text-yellow-500" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white shadow-xl">
        <CloseIcon className="p-0.5 text-red-500" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white shadow-xl">
        <StarRateIcon className="p-0.5 text-blue-500" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white shadow-xl">
        <FavoriteIcon className="p-0.5 text-green-500" fontSize="large" />
      </IconButton>
      <IconButton className="bg-white shadow-xl">
        <FlashOnIcon className="p-0.5 text-purple-500" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeOptions;
