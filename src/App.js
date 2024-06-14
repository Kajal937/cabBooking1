import logo from './logo.svg';
import './App.css';
import Navbar from './components/homepge/navbar';
import Img from './components/homepge/img';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Page from './pages/page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Booking from './pages/booking';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/page",
      element: <Page />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },

  ]);

  return (

    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

