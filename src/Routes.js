import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import AppLayout from './component/layout/AppLayout';
import LandingPage from './component/layout/LandingPage';
import LandingPage1 from './component/layout/LandingPage1';
import MainLayout from './component/layout/MainLayout';
import Page404 from './views/404/Page404';
import Bootcamp from './views/bootcamp/Bootcampno'
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
import Apply from './views/bootcamp/ApplyBootcamp';
import ApplyRedux from './views/bootcamp/ApplyRedux';
import Jurusan from './views/app/dashboard/JurusanChart';
import Jurusann from './views/app/dashboard/App';
import Test from './views/app/dashboard/BoardIdleChart';
import Pendidikan from './views/app/dashboard/PendidikanChart';
import Profile from './views/app/talent/SettingProfile'
import Chart from './views/app/dashboard/UniversitasChart';
import ReactChart from './views/app/dashboard/UniversitasChart';
import TalentDetail from './views/app/talent/TalentDetail'
import AddBatch from "./views/app/batch/AddBatch";
import BootcampDetail from "./views/bootcamp/BootcampDetail";
import EditBatch from './views/app/batch/EditBatch';
import NotFound from "./views/404/NotFound";
import DetileTesti from "./views/compland/DetileTesti";
import NotFoundApp from "./views/404/NotFounApp";
import TalentDetile from "./views/app/talent/TalentDetail";
import TalentSaga from "./views/app/talent/TalentSaga";

export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        { path: 'signin', element: <Navigate to="/auth/signin"  />  },
        { path: 'signup', element: <Navigate to="/auth/signup"  />  },
        { path: '', element: <LandingPage1/> },
        { path: 'bootcamp', element: <Bootcamp/> },
        { path: "bootcamp/:id", element: <BootcampDetail /> },
        { path: 'talent', element:  <ApplyRedux/>},
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
        { path: '', element: isLoggedIn ? <Dashboard/> : <Navigate to="/auth/signin" />},
        { path: 'candidat', element: isLoggedIn ?  <Candidat/> : <Navigate to="/auth/signin" /> },
        { path: 'batch', element: isLoggedIn ? <Batch /> : <Navigate to="/auth/signin" />},
        {
          path: "batch/new",
          element: isLoggedIn ? <AddBatch /> : <Navigate to="/auth/signin" />
        },
        { path: 'batch/edit/:id', element: isLoggedIn ? <EditBatch /> : <Navigate to="/auth/signin" />},
        { path: 'talent/profile/:id', element: isLoggedIn ?<TalentDetail /> : <Navigate to="/auth/signin" />},
        { path: "talent/detailtalent/:id", element: isLoggedIn ? (<TalentDetile />) : <Navigate to="/auth/signin" />},
        { path: 'talent', element: isLoggedIn ?<TalentSaga />: <Navigate to="/auth/signin" />},
        {
          path: "talentsaga",
          element: isLoggedIn ? (
              <Talent/>
          ) : <Navigate to="/auth/signin" />
      },
        { path: 'curriculum', element: isLoggedIn ? <Curriculum />: <Navigate to="/auth/signin" />},
        { path: 'hiring', element: isLoggedIn ? <Hiring /> : <Navigate to="/auth/signin" />},
        { path: 'setting', element: isLoggedIn ? <Setting /> : <Navigate to="/auth/signin" />},
        { path: 'jurusan', element: isLoggedIn ? <Jurusan/>: <Navigate to="/auth/signin" />},
        { path: 'jurusann', element: isLoggedIn ? <Pendidikan/>: <Navigate to="/auth/signin" />},
        { path: 'test', element: isLoggedIn ? <Test/>: <Navigate to="/auth/signin" />},
        { path: 'chart', element: isLoggedIn ? <Chart/>: <Navigate to="/auth/signin" />},
        { path: 'rc', element: isLoggedIn ? <ReactChart/>: <Navigate to="/auth/signin" />}
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: "testimoni/viewall", element: <DetileTesti /> },
    { path: "/404", element: <NotFound /> },
    { path: "/404found", element: <NotFoundApp /> },
    { path: "/app/*", element: <Navigate to="/404found" replace/> },
  ]);
}



