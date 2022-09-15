import "./App.css";
import Scoreboard from "./Components/Scoreboard";
import ScoreContextProvider from "./Contexts/ScoreContext";
import Infoboard from "./Components/Infoboard";

function App() {
  return (
    <ScoreContextProvider>
      <div className="App">
        <h1>Score Board</h1>
        <Scoreboard />
        <Infoboard />
      </div>
    </ScoreContextProvider>
  );
}

export default App;
