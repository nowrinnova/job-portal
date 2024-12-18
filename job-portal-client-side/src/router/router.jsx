import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut> ,
    children:[
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
      path: "register",
      element: <Register></Register> ,
    },
    {
      path: "signin",
      element: <SignIn></SignIn> ,
    },
  ]
  },
]);