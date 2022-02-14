import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import AppLayout from './component/layout/AppLayout';
import LandingPage from './component/layout/LandingPage';
import MainLayout from './component/layout/MainLayout';
import Page404 from './views/404/Page404';
import Bootcamp from './views/bootcamp/Bootcamp'
import Signin from './component/layout/Signin';
import Dashboard from './views/app/dashboard/Dashboard';
import Candidat from './views/app/candidat/Candidat';
import Batch from './views/app/batch/Batch';
import Curriculum from './views/app/curriculum/Curriculum';
import Hiring from './views/app/hiring/Hiring';
import Setting from './views/app/setting/Setting';
import Talent from './views/app/talent/Talent'
import BlankLayout from './component/layout/BlankLayout';
import Signup from './component/layout/Signup';

export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        { path: 'signin', element: <Navigate to="/auth/signin"  />  },
        { path: 'signup', element: <Navigate to="/auth/signup"  />  },
        { path: 'bootcamp', element: <Bootcamp/> },
        { path: '404', element: <Page404 /> },
      ]
    },
    {
      path: '/auth',
      element: <BlankLayout/>,
      children: [
        { path: 'signin', element: <Signin/> },
        { path: 'signup', element: <Signup/> },
      ]
    },
    {
      path: '/app',
      element:  <AppLayout/>,
      children: [
        { path: 'dashboard', element: <Dashboard/> },
        { path: 'candidat', element: <Candidat/> },
        { path: 'batch', element: <Batch /> },
        { path: 'talent', element: <Talent /> },
        { path: 'curriculum', element: <Curriculum /> },
        { path: 'hiring', element: <Hiring /> },
        { path: 'setting', element: <Setting /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}



