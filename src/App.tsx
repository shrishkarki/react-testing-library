
import './App.css';
import Application from './components/application/Application';
import Counter from './components/counter/counter';
import Skill from './components/skill/Skill';

function App() {
  return (
    <div className="App">
      <Application />
      <Skill skills={["HTML", "CSS", "JS", "React JS"]} />
      <Counter/>
    </div>
  );
}

export default App;
