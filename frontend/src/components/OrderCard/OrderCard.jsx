import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16 rounded-md"
          src="https://cdn.pixabay.com/photo/2023/04/14/19/09/ai-generated-7925774_640.jpg"
          alt="img"
        />
        <div className="">
          <h2 className="text-sm lg:text-xl">Burger</h2>
          <p className="text-sm lg:text-xl">&#8369;500</p>
        </div>
      </div>
      <div className="text-right">
        <Button
          variant="contained"
          className="cursor-not-allowed"
          sx={{
            //   width: {
            //   xs: '50% '
            //   },
            fontSize: {
              xs: "8px",
              sm: "10px",
              md: "12px",
              lg: "14px",
            },
            color: "white",
          }}
        >
          Completed
        </Button>
      </div>
    </Card>
  );
};

export default OrderCard;
