import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeView from '../components/HomeView'
import ContentView from '../components/ContentView';
import CourseView from '../components/CourseView'
import DashboardView from '../components/DashboardView'
import QuizView from '../components/QuizView';
import PrivateRoutes from './PrivateRoutes';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<HomeView />}/>
        <Route element={<PrivateRoutes/>} >
          <Route path='/content'  element={<ContentView />}/>
          <Route path='/course' element={<CourseView />}/>
          <Route  path='/dashboard' element={<DashboardView/>}/>
          <Route path='/quiz' element={<QuizView/>} />
        </Route>
     </Routes>
  )
}

export default AllRoutes