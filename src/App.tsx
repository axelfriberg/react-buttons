import "./App.css";
import { useState } from "react";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrementCount = () => setCount((count) => count + 1);

  return (
    <div className="App">
      <h1>Axel's Fancy Buttons</h1>
      <p>Count is: {count}</p>
      <div className="button-container">
        <Button onClick={handleIncrementCount}>Contained</Button>
        <Button variant="outlined" onClick={handleIncrementCount}>
          Outlined
        </Button>
        <Button
          startIcon={<FontAwesomeIcon icon={faEnvelope} />}
          onClick={handleIncrementCount}
        >
          Start Icon
        </Button>
        <Button
          variant="outlined"
          endIcon={<FontAwesomeIcon icon={faSave} />}
          onClick={handleIncrementCount}
        >
          End Icon
        </Button>
      </div>
    </div>
  );
}

export default App;
