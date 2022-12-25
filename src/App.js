import './App.css';
import LandingPage from './components/LandingPage';
import Values from './components/Values';
import Teachers from './components/Teachers';
import Student from './components/Student';
import Footer from './components/Footer';
import QuestionsGrid from './components/Questions';
function App() {
  return (
    <div className="App">
      <LandingPage />
      <Values />
      <Teachers />
      <Student />
      <QuestionsGrid />
      <Footer />
    </div>
  );
}

export default App;
