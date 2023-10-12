import "./styles.css";
import Board from "./components/Board";

export default function App() {
  return (
    <div className="App">
      <Board numRows="10" numCols="10" />
    </div>
  );
}
