import Gallery from "./components/Gallery/Gallery";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
