import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./utils/Layout.jsx";
import Login from "./pages/Login.jsx";
import AuthLayout from "./utils/AuthLayout.jsx";
import Join from "./pages/Join.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import { getNews } from "./api/newsApi.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await getNews(12, "white");
        },
      },
      {
        path: "/all-news",
        element: <News />,
        loader: async () => {
          return await getNews(19, "black");
        },
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Join />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
