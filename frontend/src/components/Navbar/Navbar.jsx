import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-colored.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='flex items-center gap-3'>
          <img className='w-11' src={logo} alt='logo' />
          <Link to='/' className=''>Food Express</Link>
    </div>
  )
}

export default Navbar