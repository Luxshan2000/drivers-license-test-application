import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView'
import ContentView from '../views/ContentView';
import CourseView from '../views/CourseView'
import DashboardView from '../views/DashboardView'
import QuizView from '../views/QuizView';
import PrivateRoutes from './PrivateRoutes';
import SignUp from '../views/SignUp';
import Login from '../views/Login';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<HomeView />}/>
        <Route element={<PrivateRoutes/>} >
          <Route path='/content'  element={<ContentView />}/>
          <Route path='/course' element={<CourseView />}/>
          <Route  path='/dashboard' element={<DashboardView/>}/>
          <Route path='/quiz' element={<QuizView/>} />
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes