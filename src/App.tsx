
import './App.css';
import Application from './components/application/Application';
import Counter from './components/counter/counter';
import { MuiMode } from './components/mui/MuiMode';
import Skill from './components/skill/Skill';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skill skills={["HTML", "CSS", "JS", "React JS"]} />
        <Counter />
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
