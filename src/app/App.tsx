import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes principales
import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects'; 

// Páginas de Cursos
import { CoursesListPage } from './pages/CoursesListPage';
// ¡AQUÍ ESTÁ LA PIEZA QUE FALTABA PARA VER LA INFORMACIÓN!
import { CourseDetailPage } from './pages/CourseDetailPage'; 

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={
          <div className="bg-black min-h-screen text-white">
            <Hero />
            <div id="about"><About /></div>
            <div id="services"><Projects /></div> 
            <div id="contact"><Contact /></div>
          </div>
        } />
        
        {/* Catálogo de Cursos (Cambiado a /cursos en español) */}
        <Route path="/cursos" element={<CoursesListPage />} />
        
        {/* Detalle de cada curso dinámico (El :id es la magia para "ia-empresas") */}
        <Route path="/cursos/:id" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;