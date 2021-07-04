import Header from '../components/header';
import Post from '../components/post';
import AboutMe from '../components/aboutMe';
import Skills from '../components/skills';
import Footer from '../components/footer';
import Projects from '../components/projects';

function Home() {
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

export default Home;