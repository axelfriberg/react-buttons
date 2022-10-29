import "./App.css";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>Axel's Fancy Buttons</h1>
      <div className="button-container">
        <Button>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button startIcon={<FontAwesomeIcon icon={faEnvelope} />}>
          Start Icon
        </Button>
        <Button variant="outlined" endIcon={<FontAwesomeIcon icon={faSave} />}>
          End Icon
        </Button>
      </div>
    </div>
  );
}

export default App;
