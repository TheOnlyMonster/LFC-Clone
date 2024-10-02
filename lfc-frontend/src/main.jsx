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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const api =
            "https://newsapi.org/v2/everything?q=tesla&from=2024-09-02&sortBy=publishedAt&apiKey=d9fcd35514e2428fb7dd30e5ffe5bb10";
          const response = await fetch(api);
          const data = await response.json();

          const validArticles = data.articles.filter(
            (article) =>
              article.title && article.description && article.urlToImage
          );

          const limitedData = validArticles.slice(0, 12).map((article) => ({
            ...article,
            color: "white",
          }));

          console.log(limitedData);

          return limitedData;
        },
      },
      {
        path: "/all-news",
        element: <News />,
        loader: async () => {
          const api =
            "https://newsapi.org/v2/everything?q=tesla&from=2024-09-02&sortBy=publishedAt&apiKey=d9fcd35514e2428fb7dd30e5ffe5bb10";
          const response = await fetch(api);
          const data = await response.json();

          const validArticles = data.articles.filter(
            (article) =>
              article.title && article.description && article.urlToImage
          );

          const limitedData = validArticles.slice(0, 19).map((article) => ({
            ...article,
            color: "black",
          }));

          console.log(limitedData);

          return limitedData;
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
