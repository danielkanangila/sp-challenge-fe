import Home from "./pages/Home";
import { SearchContextProvider } from "./context/search-context";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";

function App() {
  return (
    <SearchContextProvider>
      <div className="App">
        <Home />
        <Notifications />
        <Footer />
      </div>
    </SearchContextProvider>
  );
}

export default App;
