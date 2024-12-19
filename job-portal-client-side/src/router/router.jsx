import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
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
        path: "jobs/:id",
        element:<PrivateRoutes><JobDetails></JobDetails> </PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "jobApply/:id",
        element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>,
        // loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/myApplications",
        element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>,
        // loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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