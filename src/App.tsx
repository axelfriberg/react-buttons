import "./App.css";
import { Button } from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Axel's Fancy Buttons</h1>
      <div className="button-container">
        <Button>Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
}

export default App;
