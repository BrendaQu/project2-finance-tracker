import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarDefault from './componenets/NavbarDefault';
import EmployeeApprovalPage from './pages/EmployeeApprovalPage';
import EmployeeDeletePage from './pages/EmployeeDeletePage';
import EmployeeMenuPage from './pages/EmployeeMenuPage';
import LandingPage from './pages/LandingPage';
import EmployeeSearchPage from './pages/EmployeeSearchPage';
import EmployeeReportPage from './pages/EmployeeReportPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserBudgetPage from './pages/UserBudgetPage';
import UserExpensePage from './pages/UserExpensePage';
import UserMenuPage from './pages/UserMenuPage';
import UserReportPage from './pages/UserReportPage';
import Footer from './componenets/Footer';

function App() {
  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path='/index' element={<LandingPage />} />
          <Route path='/EmpApprove' element={<EmployeeApprovalPage />} />
          <Route path='/EmpDelete' element={<EmployeeDeletePage />} />
          <Route path='/EmpMenu' element={<EmployeeMenuPage />} />
          <Route path='/EmpSearch' element={<EmployeeSearchPage />} />
          <Route path='/EmpReport' element={<EmployeeReportPage />} />
          <Route path='/userbudget' element={<UserBudgetPage />} />
          <Route path='/userexpense' element={<UserExpensePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/usermenu' element={<UserMenuPage />} />
          <Route path='/userreport' element={<UserReportPage />} />
          
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
