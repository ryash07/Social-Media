import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/'style={{textDecoration:'none'}}>
            <span>SnapConnect.</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />

        <div className='search'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search...'></input>
        </div>

      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
          <img src="data:image/jpeg;base64,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" alt="" />
          <span>Jhon Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
