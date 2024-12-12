
import './App.css';
import Application from './components/application/Application';
import Skill from './components/skill/Skill';

function App() {
  return (
    <div className="App">
      <Application />
      <Skill skills={["HTML", "CSS", "JS", "React JS"]} />
    </div>
  );
}

export default App;
