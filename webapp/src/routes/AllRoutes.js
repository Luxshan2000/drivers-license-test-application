import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView'
import ContentView from '../views/ContentView';
import CourseView from '../views/CourseView'
import DashboardView from '../views/DashboardView'
import QuizView from '../views/QuizView';
import PrivateRoutes from './PrivateRoutes';
import SignUp from '../views/SignUp';
import Exam from '../views/Exam';
import Login from '../views/Login';
import PasswordVerify from '../components/PasswordVerify';
import ResetPassword from '../components/ResetPassword';
import PasswordUpdated from '../components/UpdateSuccessful';
import PremiumView from '../views/PremiumView'
import Demo from '../views/Demo'
import TermsAndConditionsView from '../views/TermsAndConditionsView';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<HomeView />}/>
        <Route element={<PrivateRoutes/>} >
          <Route path='/content'  element={<ContentView />}/>
          <Route path='/course' element={<CourseView />}/>
          <Route  path='/dashboard' element={<DashboardView/>}/>
          <Route path='/quiz/view' element={<QuizView/>} />
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/quiz/exam' element={<Exam/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/passwordVerify' element={<PasswordVerify/>}/>
          <Route path='/resetPassword' element={<ResetPassword/>}/>
          <Route path='/passwordUpdated' element={<PasswordUpdated/>}/>
          <Route path='/dashboard/premium' element={<PremiumView/>} />
          <Route path='/demo' element={<Demo/>} />
          <Route path='/termsandconditions' element={<TermsAndConditionsView/>} />
        </Route>
     </Routes>
  )
}

export default AllRoutes