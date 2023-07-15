import React from 'react'
import './profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='cover'/>
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='profilePic'/>
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize='large'/>
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize='large'/>
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize='large'/>
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
            <div className="item">
              <PlaceIcon />
              <span>India</span>
            </div>
            <div className="item">
              <LanguageIcon />
              <span>yash.dev</span>
            </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
              <EmailOutlinedIcon />
              <MoreVertOutlinedIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile
