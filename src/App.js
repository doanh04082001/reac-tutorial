import "./App.css";
import { name, age } from "./constants/constant";
import User from "./component/User";
function App() {
  console.log(name, age);
  console.log(User);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
