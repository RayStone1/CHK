import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";

const Cabinet = lazy(() => import("../views/Cabinet"));
const Login = lazy(() => import("../views/Login"));
const Home = lazy(() => import("../views/Home"));

const MainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/lk",
            element: <Cabinet />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ],
};

export default MainRoutes;
