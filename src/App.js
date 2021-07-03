import Header from '../src/components/header';
import Post from '../src/components/post';
import AboutMe from '../src/components/aboutMe';
import Skills from '../src/components/skills';
import Footer from '../src/components/footer';
import Projects from '../src/components/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Post/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
