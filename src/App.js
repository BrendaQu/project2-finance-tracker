import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarDefault from './componenets/NavbarDefault';
import EmployeeApprovalPage from './pages/EmployeeApprovalPage';
import EmployeeDeletePage from './pages/EmployeeDeletePage';
import EmployeeMenuPage from './pages/EmployeeMenuPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/EmpApprove' element={<EmployeeApprovalPage />} />
          <Route path='/EmpDelete' element={<EmployeeDeletePage />} />
          <Route path='/EmpMenu' element={<EmployeeMenuPage />} />
          <Route path='' element={<LandingPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
