import "./App.css";
import { Analysis } from "./components/Analysis";
import { AppBarComponent } from "./components/Appbar";
import { ChartsComponent } from "./components/Charts";
import { PredictiveAnalysis } from "./components/MachineLearning/PredictiveAnalysis";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <AppBarComponent />
      <ChartsComponent />
      <PredictiveAnalysis />
    </div>
  );
}

export default App;
