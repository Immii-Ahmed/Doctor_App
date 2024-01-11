import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Providers";
import { Apointment, Chat, ContactUs, Footer, Home, MakeAppointments, Services } from "./Components";
import Cookies from "universal-cookie";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DoctorsElement, LoginElement, SignupElement } from "./Elements";
import ProtectedRoutes from "./Utils/Routes/ProtectedRoutes";

function App() {

  // accessing cookies to set auth 
  const cookies = new Cookies(null, { path: '/' });

  

  return (
    <AuthProvider>
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/doctors" element={<DoctorsElement />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/makeappointment" element={<MakeAppointments />} />
      <Route path="/chat" element={<ProtectedRoutes><Chat /></ProtectedRoutes>} />
      <Route path="/apointments" element={<Apointment />} />
      <Route path="/login" element={<LoginElement/>} />
      <Route path="/signup" element={<SignupElement  />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </AuthProvider>
  );
}

export default App;
