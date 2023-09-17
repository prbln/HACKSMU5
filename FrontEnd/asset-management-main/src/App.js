import { useState } from "react";
import "./App.css";
import { Analysis } from "./components/Analysis";
import { AppBarComponent } from "./components/Appbar";
import { ChartsComponent } from "./components/Charts";
import SignInSide from "./components/Login/SignInSide";
import { PredictiveAnalysis } from "./components/MachineLearning/PredictiveAnalysis";
import Status from "./components/Status";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {loggedIn && (
        <>
          <AppBarComponent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <ChartsComponent />
          <PredictiveAnalysis />
        </>
      )}
      {!loggedIn && (
        <SignInSide loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
