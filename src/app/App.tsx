import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Corregimos las rutas: ./ significa "aquí mismo en la carpeta app"
import { Header } from './components/Header'; 
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
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
            <div id="services"><Services /></div>
            <div id="contact"><Contact /></div>
          </div>
        } />
        <Route path="/courses" element={<CoursesListPage />} />
      </Routes>
    </Router>
  );
}

export default App;