import Load from "./components/Load";
import Schedule from "./components/Schedule";


function App() {
  return (
    <div className="App">
      <table>
        <Schedule />
        <Load/>
      </table>
    </div>
  );
}

export default App;
