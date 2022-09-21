import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import MasterLayout from './layouts/admin/MasterLayout';





function App() {
  
  
  
 


  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route  path='/admin/dashboard/' element={<MasterLayout />}/> */}
          <Route  path='/admin/dashboard' element={<MasterLayout />}/>
          <Route  path='/admin/profil' element={<Profile />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
