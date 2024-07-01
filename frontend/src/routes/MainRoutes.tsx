import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import CabinetLayout from "../layouts/CabinetLayout";
import Loadable from "../components/Loadable";

const Services = Loadable(lazy(() => import("../views/Services")));
const Transfer = Loadable(lazy(() => import("../views/Transfer")));
const Login = Loadable(lazy(() => import("../views/Login")));
const Home = Loadable(lazy(() => import("../views/Home")));
const About = Loadable(lazy(() => import("../views/About")));

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
            element: <CabinetLayout />,
            children: [
                {
                    path: "",
                    element: <Services />,
                },
                {
                    path: "transfer",
                    element: <Transfer />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ],
};

export default MainRoutes;
