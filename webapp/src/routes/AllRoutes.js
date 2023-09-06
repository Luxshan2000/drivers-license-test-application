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
import ComplaintsForm from '../views/ComplainsView';
import UpdateProfile from '../views/UpdateProfile';
import TermsAndConditionsView from '../views/TermsAndConditionsView';
import PracticeExamView from '../components/PracticeExamView';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<HomeView />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/passwordupdated' element={<PasswordUpdated/>}/>
        <Route path='/terms' element={<TermsAndConditionsView/>}/>
        
        <Route element={<PrivateRoutes/>} >
          <Route path='/passwordverify' element={<PasswordVerify/>}/>
          <Route  path='/dashboard' element={<DashboardView/>}/>
          <Route path='/dashboard/course' element={<CourseView />}/>
          <Route path='/dashboard/premium' element={<PremiumView/>} />
          <Route path='/dashboard/complaintsForm' element={<ComplaintsForm/>} />
          <Route path='/dashboard/updateProfile' element={<UpdateProfile/>}/>
          <Route path='/dashboard/course/heading/1'  element={<ContentView />}/>
          <Route path='/dashboard/quiz/1/view' element={<QuizView/>} />
          <Route path='/dashboard/quiz/1/exam' element={<Exam/>}/>
          <Route path='/dashboard/practice' element={<PracticeExamView/>}/>
          <Route path='/dashboard/practice/1/view' element={<QuizView/>}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes