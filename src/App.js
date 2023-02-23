import './App.css';
import { Footer, Header } from './containers';
import { Expereince, Skills, Projects, Navbar } from './components';
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Skills />
      <Expereince />
      <Projects />
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}
export default App;
