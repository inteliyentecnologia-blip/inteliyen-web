import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects'; 
import { CoursesListPage } from './pages/CoursesListPage';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={
          <div className="bg-black min-h-screen text-white">
            <Hero />
            <div id="about"><About /></div>
            <div id="services"><Projects /></div> 
            <div id="contact"><Contact /></div>
          </div>
        } />
        <Route path="/courses" element={<CoursesListPage />} />
      </Routes>
    </Router>
  );
}

export default App;