import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_640.jpg"
          alt="img"
        />
        <div className="">
          <h2>Burger</h2>
          <p>&#8369;500</p>
        </div>
      </div>
      <div>
        <Button
                  variant="contained"
                  
                  className="cursor-not-allowed"
                  sx={{color: "white"}}
        >
          Completed
        </Button>
      </div>
    </Card>
  );
};

export default OrderCard;
