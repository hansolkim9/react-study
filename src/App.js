import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import Products from "./components/RouteExample/pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'events', element: <Events /> },
            { path: 'events/:eventId', element: <EventDetail /> }, // 수정된 부분
        ]
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
