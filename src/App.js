import Home from "./pages/Home";
import { SearchContextProvider } from "./context/search-context";
import Notifications from "./components/Notifications";

function App() {
  return (
    <SearchContextProvider>
      <div className="App">
        <Home />
        <Notifications />
      </div>
    </SearchContextProvider>
  );
}

export default App;
