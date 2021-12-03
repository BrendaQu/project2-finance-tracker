import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarDefault from './componenets/NavbarDefault';
import EmployeeApprovalPage from './pages/EmployeeApprovalPage';
import EmployeeDeletePage from './pages/EmployeeDeletePage';
import EmployeeMenuPage from './pages/EmployeeMenuPage';
import LandingPage from './pages/LandingPage';
import EmployeeSearchPage from './pages/EmployeeSearchPage';
import EmployeeReportPage from './pages/EmployeeReportPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='' element={<LandingPage />} />
          <Route path='/EmpApprove' element={<EmployeeApprovalPage />} />
          <Route path='/EmpDelete' element={<EmployeeDeletePage />} />
          <Route path='/EmpMenu' element={<EmployeeMenuPage />} />
          <Route path='/EmpSearch' element={<EmployeeSearchPage />} />
          <Route path='/EmpReport' element={<EmployeeReportPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
