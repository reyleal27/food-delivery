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
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";


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

const Navigations = ({open}) => {
    const isSmallScreen = useMediaQuery("(max-width: 900px)");
     const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleNavigate = (item) => {
        if (item.title === "Logout") {
            dispatch(logout());
            navigate('/')
        } else {
            navigate(`/myprofile/${item.title.toLowerCase()}`)
        }
    };
  return (
      <div>
          <div className="w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col pt-24 justify-center text-xl">
              <Drawer
                  anchor="left"
                  variant={isSmallScreen ? "temporary" : "permanent"}
                  open={isSmallScreen ? open : true}
                  PaperProps={{
            sx: {
                          zIndex: 1,
                marginTop: '4rem'
            },
          }}
              >
                  
          {menu.map((item,index) =>  <div key={index} onClick={() => handleNavigate(item)}>
                <div className="px-5 py-6 cursor-pointer">
                  {item.icon}
                  <span className="px-3">{item.title}</span>
                </div>
                {index !== menu.length - 1 && <Divider />}
              </div>)}
             </Drawer>
                  
           </div>
          
             
    </div>
  )
}

export default Navigations