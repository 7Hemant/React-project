import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router/Router";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
