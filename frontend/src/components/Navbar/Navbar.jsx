import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-colored.png';
import { Link } from 'react-router-dom';
import { Avatar, Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
      <header className='flex sticky top-0 justify-between items-center gap-3 px-5 z-[1000] py-[0.8rem] bg-[#442442] lg:px-20 '>
        <div className='lg:mr-10 flex items-center space-x-4'>
          <Link to='/' className='logo flex items-center gap-3 font-semibold text-gray-300 md:text-xl lg:text-2xl'>
           <img className='w-10' src={logo} alt='logo' />  
          Food Express
          </Link>
        </div>
      <ul className='flex item-center space-x-2 lg:space-x-10'>
        <li>
          <IconButton>
            <SearchIcon sx={{fontSize:"1.5rem" }} />
          </IconButton>
        </li>
        <li>
          <Avatar sx={{ bgcolor: "white",cursor: "pointer",color: "violet"}} >C</Avatar>
        </li>
        <li>
          <IconButton>
            <Badge color='secondary' badgeContent='9' max={99} >
                <ShoppingCartIcon sx={{fontSize:"1.5rem" }} />
            </Badge>
          </IconButton>
        </li>
        </ul>
    </header>
  )
}

export default Navbar