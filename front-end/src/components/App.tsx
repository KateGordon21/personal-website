import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar';
import Work from './Work';


const App: React.FC = () => {
  return (
    <main>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Work/>} />
        </Routes>
    </Router>
    </main>
  );
};

export default App;