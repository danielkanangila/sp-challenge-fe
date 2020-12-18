import Home from "./pages/Home";
import { SearchContextProvider } from "./context/search-context";

function App() {
  return (
    <SearchContextProvider>
      <div className="App">
        <Home />
      </div>
    </SearchContextProvider>
  );
}

export default App;
