import './App.css';
import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import About from '../src/components/about/About';
import Skills from '../src/components/skills/Skills';
// import Services from '../src/components/services/Services';
import Qualification from '../src/components/qualification/Qualification';
import Work from '../src/components/work/Work';
import Contact from './components/contact/Contactt';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import EmailHome from './components/email-home/EmailHome';
import SocialHome from './components/social-home/SocialHome';

function App() {
  return (
    <div className="App">
     <>
     <Header />
     <main className='main'>

      <Home />
      <SocialHome />
      <EmailHome />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Work />
      <Contact />
     </main>

      <Footer />
     <ScrollUp />
     </>
    </div>
  );
}

export default App;
