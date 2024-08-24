import Header from './components/Header';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Techs from './components/Techs';

function App() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main className='container mx-auto px-6 py-12'>
        <AboutSection />
        <ProjectsSection />
        <Techs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
