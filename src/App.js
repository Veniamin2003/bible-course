import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Reason from "./components/Reason/Reason";
import Stages from "./components/Stages/Stages";
import Program from "./components/Programm/Program";
import FullCourse from "./components/fullCourse/FullCource";
import Mentor from "./components/mentor/Mentor";
import Answers from "./components/answers/Answers";
import Sertificate from "./components/Sertificate/Sertificate";
import Testimonials from "./components/testimonials/Testimonials";
import Motivation from "./components/Motivation/Motivation";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div className="App">
          <Header/>
          <About />
          <Reason />
          <Stages />
          <Program />
          <FullCourse />
          <Mentor />
          <Answers />
          <Sertificate />
          <Testimonials />
          <Motivation />
          <Footer />
      </div>
  );
}

export default App;
