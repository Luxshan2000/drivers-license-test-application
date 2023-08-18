import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeView from './components/HomeView'
import ContentView from './components/ContentView';
import CourseView from './components/CourseView'
import DashboardView from './components/DashboardView'
import QuizView from './components/QuizView'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' exact element={<HomeView />}/>
        <Route path='/content'  element={<ContentView />}/>
        <Route path='/course' element={<CourseView />}/>
        <Route  path='/dashboard' element={<DashboardView/>}/>
        <Route path='/quiz' element={<QuizView/>} />
     </Routes>
    </div>
  );
}

export default App;
