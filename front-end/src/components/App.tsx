import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar';
import Work from './Work';
import Development from './Development';
import Designs from './Designs';


const App: React.FC = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workexperience" element={<Work/>} />
          <Route path="/development" element={<Development/>} />
          <Route path="/designs" element={<Designs/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;