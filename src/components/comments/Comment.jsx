import React, { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'


const Comment = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            name: "John Doe",
            userId: 1,
            profilePicture:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            name: "John Doe",
            userId: 2,
            profilePicture:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt=''/>
            <input type="text" placeholder='write a comment' />
            <button type='button'>send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt=''/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comment