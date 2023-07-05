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

function App() {

  const currentUser = true;

  const Layout = () =>{
    return(
      <div>
        <Navbar />
        <div style={{display:'flex'}}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoutes = ({children}) =>{
    console.log(!currentUser);
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
