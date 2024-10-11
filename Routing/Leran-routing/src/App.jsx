import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Awash from "./Components/Awash";
import Abhishek from "./Components/Abhishek";
import Anjali from "./Components/Anjali";
import Jyoti from "./Components/Jyoti";
import Navbar from "./Components/Navbar";
import Course from "./Components/Course";
import AIML from "./Components/Aiml";
import Notfound from "./Components/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Awash />
        <Navbar />
      </div>
    ),
  }, //? Aur Basically hum aise hi routing create krte hai
  {
    path: "/Abhishek",
    element: (
      <div>
        {" "}
        <Abhishek /> <Navbar />
      </div>
    ),
  },
  {
    path: "/Anjali",
    element: (
      <div>
        <Anjali />
        <Navbar />
      </div>
    ),
    children: [
      { path: "Course", element: <Course /> },
      { path: "AIML", element: <AIML /> },
    ],
  },
  {
    path: "/Jyoti",
    element: (
      <div>
        <Jyoti />
        <Navbar />
      </div>
    ),
  },

  {
    path:"*",
    element:<Notfound/>
  }
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
