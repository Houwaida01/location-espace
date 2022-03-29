import './App.css';
import Navigation from './components/Navigation';
import {Routes,Route} from 'react-router-dom'
import LandPage from './pages/LandPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Annonce from './pages/Annonce';
import Profile from './pages/admin/Profile';
// import PrivateRoute from './route/PrivateRoute';
import SignUpUser from './pages/user/SignupUser';
import SigninUser from './pages/user/SigninUser';
import Error from './pages/Error';
import SignInAdmin from './pages/admin/SignInAdmin';
import EditUser from './pages/admin/EditUser';
import AddUser from './pages/admin/AddUser';
import AddAnnonce from './pages/user/AddAnnonce';
import EditAnnonce from './pages/user/EditAnnonce';
import ProfileUser from './pages/user/ProfileUser';
import ListUsers from './pages/admin/ListUsers';
import ListAnnonc from './pages/admin/ListAnnonc';
import MyAnnonce from './pages/user/MyAnnonce';
// import EditSelf from './pages/user/EditSelf';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';


function App() {
  
  return (
    <div className="App">
      <Navigation/>
      {/* <h1> Location des espaces libres</h1> */}
      <Routes>
    {/* PUBLIC PAGES */}
        <Route path='/' element={<LandPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/annonce' element={<Annonce/>} />
        {/* <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />  */}
        <Route path='/*' element={<Error/>} />
    {/* user */}
        <Route path='/user/signup' element={<SignUpUser/>} /> 
        <Route path='/user/signin' element={<SigninUser/>} />
        <Route path='/user/addannonce' element={<AddAnnonce/>} />
        <Route path='/user/editannonce/:id' element={<EditAnnonce/>} />
        <Route path='/myannonce' element={<MyAnnonce/>} />
        {/* <Route path='/user/editself/:id' element={<EditSelf/>} /> */}
        <Route path='/profileuser' element={<ProfileUser/>} />
        
    {/* admin */}
        <Route path='/admin/signin' element={<SignInAdmin/>} />
        <Route path='/admin/edituser/:id' element={<EditUser/>} />
        <Route path='/admin/listuser' element={<ListUsers/>} />
        <Route path='/admin/adduser' element={<AddUser/>} /> 
        <Route path='/admin/listannonce' element={<ListAnnonc/>} /> 
        <Route path='/profile' element={<Profile/>} />

    {/* ROUTE PAGE */}
        {/* <Route path='/profile' element={<PrivateRoute> <Profile/> </PrivateRoute>} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App; 
