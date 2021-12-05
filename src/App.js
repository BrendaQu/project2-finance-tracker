import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserBudgetPage from './pages/UserBudgetPage';
import UserExpensePage from './pages/UserExpensePage';
import UserMenuPage from './pages/UserMenuPage';
import UserReportPage from './pages/UserReportPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/userbudget' element={<UserBudgetPage />} />
          <Route path='/userexpense' element={<UserExpensePage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/usermenu' element={<UserMenuPage />} />
          <Route path='/userreport' element={<UserReportPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
