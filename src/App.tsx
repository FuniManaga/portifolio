import { Contact } from './components/Contact';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav'
import Work from './components/Work';
import Main from './components/main';
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;


