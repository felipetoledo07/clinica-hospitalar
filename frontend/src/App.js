import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateDoctor from './pages/doctor/CreateDoctor';
import Doctor from './pages/doctor/Doctor';
import DoctorLogin from "./pages/doctor/DoctorLogin"
import DoctorRegistration from "./pages/doctor/DoctorRegistration"
import DrugstoreLogin from "./pages/drugstore/DrugstoreLogin"
import DrugstoreRegistration from "./pages/drugstore/DrugstoreRegistration"
import HomePage from './pages/HomePage';
import AppointmentHome from './pages/appointment/AppointmentHome';
import PatientHome from './pages/patient/PatientHome';
import RecipeHome from './pages/recipe/RecipeHome';
import CertificateHome from './pages/certificate/CertificateHome';
import DrugstoreHome from './pages/drugstore/DrugstoreHome';
import DoctorHome from './pages/doctor/DoctorHome';
import Appointment from './pages/appointment/Appointment';
import Patient from './pages/patient/Patient';
import PatientAppointment from './pages/patient/PatientAppointment';
import RecipePharmacy from './pages/recipe/RecipePharmacy';
import RecipePharmacyDetails from './pages/recipe/RecipePharmacyDetails';
import PharmacyDoctor from "./pages/doctor/PharmacyDoctor"
import PharmacyDrugstore from './pages/drugstore/PharmacyDrugstore';

function App() {

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/createdoctor' exact Component={CreateDoctor}></Route>
          <Route path='/doctor/:id' exact Component={Doctor}></Route>
          
          <Route path='/' exact Component={HomePage}></Route>

          <Route path='/doctor/login' exact Component={DoctorLogin}></Route>
          <Route path='/doctor/registration' exact Component={DoctorRegistration}></Route>

          <Route path='/drugstore/login' exact Component={DrugstoreLogin}></Route>
          <Route path='/drugstore/registration' exact Component={DrugstoreRegistration}></Route>
          
          <Route path='/appointment/' exact Component={AppointmentHome}></Route>
          <Route path='/appointment/:id' exact Component={Appointment}></Route>

          <Route path='/patient/' exact Component={PatientHome}></Route>
          <Route path='/patient/:id' exact Component={Patient}></Route>
          <Route path='/patient/appointment/:id' exact Component={PatientAppointment}></Route>

          <Route path='/pharmacy/recipe' exact Component={RecipePharmacy}></Route>
          <Route path='/pharmacy/recipe/:id' exact Component={RecipePharmacyDetails}></Route>
          <Route path='/pharmacy/drugstore/' exact Component={PharmacyDrugstore}></Route>
          <Route path='/pharmacy/doctor/' exact Component={PharmacyDoctor}></Route>

          <Route path='/doctor/' exact Component={DoctorHome}></Route>
          <Route path='/recipe/' exact Component={RecipeHome}></Route>
          <Route path='/certificate/' exact Component={CertificateHome}></Route>
          <Route path='/drugstore/' exact Component={DrugstoreHome}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
