import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import Config from './components/Config';
function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path='/' element={
            <div>
              <Home />
            </div>
          } />
          <Route path='/config' element={
            <div>
              <Config />
            </div>
          } />
          <Route path='/*' element={
            <div>
              <Home />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
