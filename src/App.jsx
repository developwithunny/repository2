import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Main from "../pages/Main"
import WatchMovie from "../pages/WatchMovie"


const App = () => {
  const routes = createBrowserRouter([
    { path: "/",
      element: <Main/>

    },
    {
    path:"/watch/:slug",
    element: <WatchMovie/>
  }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
