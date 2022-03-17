import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import LandingPage from "./component/layout/LandingPage";
import Bootcamp from "./views/bootcamp/Bootcamp";
import Signin from "./component/layout/Signin";
import Dashboard from "./views/app/dashboard/Dashboard";
import Candidat from "./views/app/candidat/Candidat";
import Batch from "./views/app/batch/Batch";
import Curriculum from "./views/app/curriculum/Curriculum";
import Hiring from "./views/app/hiring/Hiring";
import Setting from "./views/app/setting/Setting";
import BlankLayout from "./component/layout/BlankLayout";
import Signup from "./component/layout/Signup";
import NotFound from "./views/404/NotFound";
import DetileTesti from "./views/compland/DetileTesti";
import NotFoundApp from "./views/404/NotFounApp";
import TalentDetile from "./views/app/talent/TalentDetile";
import TalentSaga from "./views/app/talent/TalentSaga";

export default function Routes(isLoggedIn) {
    return useRoutes([
        {
            path: "/",
            element: <LandingPage />,
            children: [
                { path: "signin", element: <Navigate to="/auth/signin" /> },
                { path: "signup", element: <Navigate to="/auth/signup" /> },
                { path: "bootcamp", element: <Bootcamp /> },
            ],
        },
        // { path: "bootcamp", element: <Bootcamp /> },
        // { path: "signin", element: <Signin /> },
        // { path: "signup", element: <Signup /> },
        { path: "testimoni/viewall", element: <DetileTesti /> },
        { path: "/404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
        {
            path: "/auth",
            element: <BlankLayout />,
            children: [
                { path: "signin", element: <Signin /> },
                { path: "signup", element: <Signup /> },
            ],
        },

        {
            path: "/app",
            element: <AppLayout />,
            children: [
                {
                    path: "dashboard",
                    element: isLoggedIn ? (
                        <Dashboard />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "candidat",
                    element: isLoggedIn ? (
                        <Candidat />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "batch",
                    element: isLoggedIn ? (
                        <Batch />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "talent",
                    element: isLoggedIn ? (
                        <TalentSaga />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "talent/detailtalent/:id",
                    element: isLoggedIn ? (
                        <TalentDetile />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "curriculum",
                    element: isLoggedIn ? (
                        <Curriculum />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "hiring",
                    element: isLoggedIn ? (
                        <Hiring />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
                {
                    path: "setting",
                    element: isLoggedIn ? (
                        <Setting />
                    ) : (
                        <Navigate to="/auth/signin" />
                    ),
                },
            ],
        },
        { path: "/404found", element: <NotFoundApp /> },
        { path: "/app/*", element: <Navigate to="/404found" /> },
    ]);
}
