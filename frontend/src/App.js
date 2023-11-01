import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import MainDoctor from './pages/MainDoctor';
import CreateDoctor from './pages/CreateDoctor';
import Doctor from './pages/Doctor';


function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/createdoctor">Create doctor</Link>
        <Link to="/">Doctor Page</Link>
        <Routes>
          <Route path='/' exact Component={MainDoctor}></Route>
          <Route path='/createdoctor' exact Component={CreateDoctor}></Route>
          <Route path='/doctor/:id' exact Component={Doctor}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
