import { Box, useMediaQuery } from '@chakra-ui/react';
import './App.css';
import FloatingMouse from './Components/FloatingMouse';
import Navbar from './Components/Navbar';
import Sidenav from './Components/Sidenav';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
function App() {
  const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

  return (
    <div className='App'>
      <Navbar/>
      {isLargerThan480 ? <Sidenav/> : null}
      {isLargerThan480 ? <FloatingMouse/> : null}
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
