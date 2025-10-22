
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import Contact from './components/Contact'
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import TaskManagement from './pages/TaskManagement';
import Progress from './pages/Progress';


function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
        path="/"
        element={
          <>
            <Hero />
            <Feature />
            <About />
            <Contact />
            <Footer />
          </>
        }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/task-management' element={<TaskManagement />} />
        <Route path='/progress' element={<Progress  />} />

      </Routes>
    </Router>
  )
}

export default App
