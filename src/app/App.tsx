import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects'; 

// AQUÍ ESTÁ LA CORRECCIÓN: Le quitamos las llaves { } a los dos y borramos el texto fantasma
import CoursesListPage from './pages/CoursesListPage';
import CourseDetailPage from './pages/CourseDetailPage'; 

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
        
        {/* Tu catálogo principal */}
        <Route path="/cursos" element={<CoursesListPage />} />
        
        {/* EL MAPA PARA LOS CURSOS INDIVIDUALES */}
        <Route path="/cursos/:id" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;