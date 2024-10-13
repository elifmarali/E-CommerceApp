import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";
import Products from "./Pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
