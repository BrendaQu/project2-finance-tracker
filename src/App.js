import './App.css';
import Footer from './componenets/Footer';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarUser from './componenets/NavbarUser';
import UserBudgetForm from './componenets/UserBudgetForm';

function App() {
  return (
    <div>
        <NavbarUser />
        <UserBudgetForm />
        <Footer />
    </div>
  );
}

export default App;
