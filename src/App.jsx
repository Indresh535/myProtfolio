
import {About , Footer, Headers, Skills, Works} from './container'
import {Navbar} from './container'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Headers/>
      <About/>
      <Works/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
