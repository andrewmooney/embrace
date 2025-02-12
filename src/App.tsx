import TeamSection from './components/TeamSection/index.tsx';
import ContactForm from './components/ContactForm/index.tsx';
import ServicesSection from './components/ServicesSection/index.tsx';
import Footer from './components/Footer/index.tsx';
import Header from './components/Header/index.tsx';
import Navbar from './components/Navbar/index.tsx';
import Hero from './components/Hero/index.tsx';

function App() {
  return (
    <>
      <div className='page-container, sen-normal'>
        <Header />
        <Navbar />
        <Hero />
        <TeamSection />
        <ServicesSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
