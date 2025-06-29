import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages & Components
import Landing from './pages/landing'
import Navbar from './components/navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/admin'
import Menus from './pages/menus'
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      {/* Everything that needs to use router is inside this*/}
      <BrowserRouter> 
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Landing/>}
            />
            <Route
              path="/admin"
              element={<Admin/>}
            />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/signup"
              element={<Signup/>}
            />
            <Route
              path="/menu"
              element={<Menus/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
