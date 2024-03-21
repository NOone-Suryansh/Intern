import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pics/Logo-Small-Light.png';
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='h-14  justify-center items-center flex border-b-[0.1px] border-b-richblack-25'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <div className='items-center flex gap-6'>
        <Link to="/">
            <img className='bg-black rounded-[50px]' src={logo} alt="" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">Contacts</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Messages</Link>
        <Link to="/">Updates</Link>
        </div>
        <nav className=''>
          <ul className='flex gap-[25px] items-center'>
                <FaRegBell className='text-xl' />
                <Link to="/">
                    <img className='bg-black rounded-[50px]' src={logo} alt="" />
                </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
