import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import MasterLayout from "./layouts/admin/MasterLayout";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Protected from "./layouts/admin/Protected";
import UserHome from "./pages/UserHome";
import UserProfil from "./pages/UserProfil";
import axios from 'axios';



// Request beaállítása
axios.defaults.withCredentials = true;    
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){ // Ez fontos mert enélkül az api unathorized választ ad

  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

});




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route  path='/admin/dashboard/' element={<MasterLayout />}/> */}
          {/* <Route path="/admin/dashboard" element={<MasterLayout />} /> */}
          <Route path="/admin/dashboard" element={<Protected Cmp={MasterLayout} />} />
          <Route path="/admin/profil" element={<Protected Cmp={Profile} />} />
          <Route path="/userhome" element={<Protected Cmp={UserHome} />} />
          <Route path="/userprofil" element={<Protected Cmp={UserProfil} />} />
          {/* <Route path="/admin/profil" element={<Profile />} /> */}
          <Route path="/bejelentkezes" element={<Login />} />
          <Route path="/regisztracio" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
