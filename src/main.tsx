import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActivityDetailsPage from "./pages/ActivityDetailPage.tsx";
import ActivityPage from "./pages/ActivityPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import "./style/style.scss";
import Header from "./components/header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "activitys", element: <ActivityPage /> },
      { path: "activity/:id", element: <ActivityDetailsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
