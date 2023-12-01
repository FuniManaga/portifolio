import { Contact } from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/about';
import Sidenav from './components/Sidenav'
import Work from './components/project';
import styles from './style';
import Main from './components/main';

function App() {
  return (
    <div >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Sidenav />
          </div>
        </div>

      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;


