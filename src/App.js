import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./Component/Grocery"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import {appStore} from "./utils/appStore";
import Cart from "./Component/Cart";

const Grocery = lazy(() => import("./Component/Grocery"));

const AppLayout = () => {

  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data ={
      name:"sujata",
    };
    setUserName(data.name);
  },[]);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
       path: "/cart",
       element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<RouterProvider router={appRouter} />);
