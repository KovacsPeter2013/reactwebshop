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
import Category from "./components/admin/category/Category";
import ViewCategory from "./components/admin/category/ViewCategory";
import EditCategory from "./components/admin/category/EditCategory";
import AddProduct from "./components/admin/product/Addproduct";
import EditProduct from "./components/admin/product/EditProduct";




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
          <Route path="/admin/kategoria" element={<Protected Cmp={Category} />} />
          <Route path="/admin/kategoriak" element={<Protected Cmp={ViewCategory} />} />
          <Route path="/admin/edit-category/:id" element={<Protected Cmp={EditCategory} />} />
          <Route path="/admin/add-product" element={<Protected Cmp={AddProduct} />} />
          <Route path="/admin/view-product" element={<Protected Cmp={EditProduct} />} />
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
