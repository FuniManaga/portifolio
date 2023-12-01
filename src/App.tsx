import { Contact } from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/about';
import Sidenav from './components/Sidenav'
import Work from './components/project';
import Main from './components/main';

function App() {
  return (
    <div >
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;


