import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/LandingPAge';
import Aboutindex from './components/About';
import Contactindex from './components/ContactUs';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Routes';
import VaayuCafe from './components/VaayuCafe';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute/>
        {/* <VaayuCafe/> */}
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Aboutindex/> */}
     {/* <Contactindex/> */}
    </>
  );
}
 
export default App;
