import React from 'react'
import './Posts.scss'
import Post from '../post/post'

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consecteur adipisicnf elit",
      img:"https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=600"      
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 1,
      profilePic:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet consecteur adipisicnf elit",
 
    },
    
    
  ]

  return (
    <div className='posts'>
      {
        posts.map(post=>(
          <Post key={post.id} post={post}></Post>
        ))
      }
    </div>
  )
}

export default Posts
