import { createBrowserRouter } from "react-router-dom";
import Login from "../Screens/Login";
import Layout from "../Screens/Layout";
// import Home from "../Screens/Home";
import MealsListing from "../Screens/Meals/List/MealsListing";
import Register from "../Screens/Register";
import Addmeal from "../Screens/Meals/Add/Addmeal";
import Addplans from "../Screens/Plans/Add/Addplans";
import AddChallenge from "../Screens/Challenges/Add/AddChallenge";
import ListingChallanges from "../Screens/Challenges/List/ListingChallanges";
import Auth from "../Components/Auth/Auth";
// import WithoutLogin from "../Components/Auth/WithoutLogin";



const router = createBrowserRouter([
      {
        path: "/",
        element: <Auth><Login /></Auth>,
      },
      {
        path: "/register",
        element: <Auth><Register/></Auth>,
      },
      {
        path: "/user",
        element: <Auth><Layout/></Auth>,
        children: [
         
          {
            path: "",
            // element: <Home/>,
            element: <div>Hoem</div>,
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
            element:<ListingChallanges/>
          },
          {
            path: "add-challenge",
            element:<AddChallenge/>
          },
          
        ],
      },
    
])

export default router;