import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>SNAP CONNECT.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima, ex 
              fugit deserunt rerum quis itaque exercitationem</p>
          <span>Do you have an account?</span>
          <Link to='/login'><button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register