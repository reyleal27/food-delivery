import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    icon: <HomeIcon />,
    title: "Profile",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Orders",
  },
  {
    icon: <FavoriteIcon />,
    title: "Favorite",
  },
  {
    icon: <AddReactionIcon />,
    title: "Address",
  },

  {
    icon: <AccountBalanceWalletIcon />,
    title: "Payment",
  },
  {
    icon: <EventIcon />,
    title: "Events",
  },
  {
    icon: <NotificationsActiveIcon />,
    title: "Notification",
  },
  {
    icon: <LogoutIcon />,
    title: "Logout",
  },
];

const ProfileNavigations = ({ open }) => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();
  const handleNavigate = (item) =>
    navigate(`/myprofile/${item.title.toLowerCase()}`);

  return (
    <div>
      <Drawer
        anchor="left"
        variant={isSmallScreen ? "temporary" : "permanent"}
        // onClose={handleClose}
        open={isSmallScreen ? open : true}
        PaperProps={{
          sx: {
            zIndex: 1,
          },
        }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col pt-24 justify-center text-xl">
          {menu.map((item, index) => (
            <div key={index} onClick={() => handleNavigate(item)}>
              <div className="px-5 py-6 cursor-pointer">
                {item.icon}
                <span className="px-3">{item.title}</span>
              </div>
              {index !== menu.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigations;
