import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
