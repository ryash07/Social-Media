import React, { useContext } from 'react'
import './leftbar.scss'
import { AuthContext } from '../../context/authContext'

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=DEvkNqxkthg5&format=png" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=2x&id=13652&format=png" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=chS9utjiN2xq&format=png" alt="" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=2x&id=U5DRIViwaB2V&format=png" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=POEa0grplML7&format=png" alt="" />
            <span>Memories</span>
          </div>
        </div>
        
        <hr />
        <div className="menu">
          <span>Shotcuts</span>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=26055&format=png" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=jByggJU3XaEM&format=png" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=yRoFUHiH0uft&format=png" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=v48YeNbSIl9z&format=png" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=sZS8MRV88u6i&format=png" alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="https://img.icons8.com/?size=2x&id=FiKQlwxGefeJ&format=png" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=fS7NyZKyMzc0&format=png" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="https://img.icons8.com/?size=1x&id=AfZkQMM1NmOK&format=png" alt="" />
            <span>Courses</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Leftbar
