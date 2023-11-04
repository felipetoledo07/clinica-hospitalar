import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import CreateDoctor from './pages/doctor/CreateDoctor';
import Doctor from './pages/doctor/Doctor';
import Login from "./pages/doctor/Login"
import Registration from "./pages/doctor/Registration"
import HomePage from './pages/HomePage';


function App() {

  return (
    <div className="App">
      <Router>
        <div className='nav'>
          <Link className='home_button' to="/">Home</Link>
          <div className='login_div'>
            <Link className='doctor_login_button' to="/doctor/login">Médico</Link>
            <Link className='drugstore_login_button' to="/doctor/login">Farmácia</Link>
          </div>
        </div>
        <Routes>
          <Route path='/' exact Component={HomePage}></Route>
          <Route path='/createdoctor' exact Component={CreateDoctor}></Route>
          <Route path='/doctor/:id' exact Component={Doctor}></Route>
          
          <Route path='/doctor/login' exact Component={Login}></Route>
          <Route path='/doctor/registration' exact Component={Registration}></Route>
        </Routes>
      </Router>

      

    </div>
  );
}

export default App;
