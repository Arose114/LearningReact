import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Todo from "./components/Todo.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="Todo">
        <Todo Details={{ name: "Do morning devotion", Time: "6am" }} />
        <Todo Details={{ name: "Do house chores", Time: "7am" }} />
        <Todo Details={{ name: "Go for Lectures", Time: "8am" }} />
        <Todo Details={{ name: "Do Assignments", Time: "4pm" }} />
      </div>
    </div>
  );
}

export default App;
