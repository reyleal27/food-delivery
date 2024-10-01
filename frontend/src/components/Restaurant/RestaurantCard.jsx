import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RestaurantCard = () => {
  return (
    <Card className="w-[18rem] relative">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"}relative`}
      ></div>
          <img
              className="w-full h-[10rem] rounded-t-md object-cover"
        src="https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg"
        alt="restaurant"
          />
          <Chip
              size="small"
              className="absolute top-2 left-2"
              color={true ? "success" : "error"}
              label={true ? "open" : "closed"}
          />
          
          <div className="p-4 textPart lg:flex w-full justify-between">
              <div className="space-y-1">
                  <h4 className="font-semibold text-lg">Indian Restaurant</h4>
              <p className="text-gray-400 text-sm">
                  Craving it all? Dive into our global...
                </p>
              </div>
              <div>
                  <IconButton>
                      {true ? <FavoriteIcon sx={{color: 'red'}} /> : <FavoriteBorderIcon />}
                  </IconButton>
              </div>
          </div>
    </Card>
  );
};

export default RestaurantCard;
