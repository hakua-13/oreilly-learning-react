import { StartRating } from "./StarRating";

function App() {
  return (
    <div className="App">
      <StartRating onDoubleClick={e => alert('double click')}/>
    </div>
  );
}

export default App;
