import './App.css';
import AllRoutes from './routes/AllRoutes'
import NarbarComponent from './components/NarbarComponent';
import FooterComponent from './components/FooterComponent'; 

function App() {
  return (
    <div style={{minHeight:'100vh', margin:"0", padding:"0"}} >
      <NarbarComponent />
      <div  style={{minHeight:'100vh',margin:"0", padding:"0"}} >
        <AllRoutes />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
