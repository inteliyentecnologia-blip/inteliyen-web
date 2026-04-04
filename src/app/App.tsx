import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects'; 
import CoursesListPage from './pages/CoursesListPage';
import CourseDetailPage from './pages/CourseDetailPage'; 

function App() {
  return (
    <Router>
      {/* Contenedor principal que abarca toda la pantalla */}
      <div className="relative w-full min-h-screen bg-black text-white">
        
        {/* ESCUDO DE HEADER: Lo forzamos a estar en la capa más alta con estilo en línea para que Tailwind no lo ignore */}
        <div style={{ position: 'relative', zIndex: 99999 }}>
          <Header /> 
        </div>

        {/* CONTENIDO PRINCIPAL: Lo mandamos a la capa 0 para que siempre quede debajo del Header */}
        <main className="relative z-0">
          <Routes>
            <Route path="/" element={
              // Quitamos el div con bg-black de aquí porque ya lo tiene el contenedor principal
              <>
                <Hero />
                <div id="about"><About /></div>
                <div id="services"><Projects /></div> 
                <div id="contact"><Contact /></div>
              </>
            } />
            <Route path="/cursos" element={<CoursesListPage />} />
            <Route path="/cursos/:id" element={<CourseDetailPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;