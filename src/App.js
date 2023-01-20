import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidenav from './Components/Sidenav';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Sidenav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Box h={5} bg={'yellow.500'}></Box>
    </div>
  );
}

export default App;
