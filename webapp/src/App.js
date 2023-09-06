import './App.css';
import AllRoutes from './routes/AllRoutes'
import { ModalProvider } from './context/ModalContext';
import ModalComponent from './components/ModalComponent';
import { DeviceWidthProvider } from './context/DeviceWidthContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <DeviceWidthProvider>
        <ModalProvider>
          <div style={{backgroundColor: "white",minHeight:'100vh', margin:"0", padding:"0"}} >
            <div  style={{minHeight:'100vh',margin:"0", padding:"0"}} >
              <AllRoutes />
            </div>
          </div>
          <ModalComponent />
        </ModalProvider>
      </DeviceWidthProvider>
    </AuthProvider>
  );
}

export default App;
