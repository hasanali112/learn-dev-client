import App from "@/App";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Tutorial from "@/pages/Tutorial";

import FrontEnd from "@/pages/tutorialSubPages/webdevelopment/FrontEnd";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "front-end",
        element: <FrontEnd />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
