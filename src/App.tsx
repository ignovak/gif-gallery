import { useState } from "react";
import Gallery from "./components/Gallery/Gallery";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm query={query} onSubmit={setQuery} />
        <Gallery query={query} />
      </header>
    </div>
  );
}

export default App;
