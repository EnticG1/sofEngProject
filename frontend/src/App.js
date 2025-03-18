import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages & Components
import Landing from './pages/landing'
import Navbar from './components/navbar'
import Admin from './pages/admin'

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
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
