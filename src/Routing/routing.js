import { createBrowserRouter } from "react-router-dom";
import Login from "../Screens/Login";
import Layout from "../Screens/Layout";
import Home from "../Screens/Home";
import MealsListing from "../Screens/Meals/List/MealsListing";
import Register from "../Screens/Register";
import Addmeal from "../Screens/Meals/Add/Addmeal";
import Addplans from "../Screens/Plans/Add/Addplans";
import AddChallenge from "../Screens/Challenges/Add/AddChallenge";



const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/user",
        element: <Layout/>,
        children: [
         
          {
            path: "",
            element: <Home/>,
          },
          
          {
            path: "add-meal",
            element: <Addmeal/>,
          },
          {
            path: "meal-history",
            element: <MealsListing/>,
          },
          {
            path: "view-plans",
            element:<div>View Plans</div>
          },
          {
            path: "add-plan",
            element: <Addplans/>
          },
          {
            path: "view-challenges",
            element:<div>View Challenges</div>
          },
          {
            path: "add-challenge",
            element:<AddChallenge/>
          },
          
        ],
      },
    
])

export default router;