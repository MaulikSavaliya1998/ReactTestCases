import logo from "./logo.svg";
import "./App.css";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <div className="App" data-testid="myrootdiv">
      <h1>Testing Basics</h1>
      <input type="text" placeholder="type name here." />
      <button>Test Button</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <CommentForm />
    </div>
  );
}

export default App;
