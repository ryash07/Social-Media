import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>SNAP CONNECT.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima, ex 
              fugit deserunt rerum quis itaque exercitationem</p>
          <span>Don't you have an account?</span>
          <Link to='/register'><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login