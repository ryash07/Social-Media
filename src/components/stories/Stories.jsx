import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext'

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
    {
        id: 1,
        name: "John Doe",
        img: "https://images.pexels.com/photos/16642890/pexels-photo-16642890/free-photo-of-green-feel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
        id: 2,
        name: "John Doe",
        img: "https://images.pexels.com/photos/16441971/pexels-photo-16441971/free-photo-of-hand-holding-coffee-drink.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
        id: 3,
        name: "John Doe",
        img: "https://images.pexels.com/photos/14638828/pexels-photo-14638828.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
        id: 4,
        name: "John Doe",
        img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    ]

    return (
        <div className="stories">
          <div className="story">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
              <button>+</button>
            </div>
          {stories.map(story=>(
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
        </div>
      )
}

export default Stories
