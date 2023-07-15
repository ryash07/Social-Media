import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';
import Profile from './pages/profile/Profile';
import './style.scss'
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)

  console.log(currentUser);

  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:'flex'}}>
          <Leftbar />
          <div style={{flex:6}}>
             <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoutes = ({children}) =>{
    // console.log(!currentUser);
    if(!currentUser){
      return <Navigate to='/login'></Navigate>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes><Layout/></ProtectedRoutes> ,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
