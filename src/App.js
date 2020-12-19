import Home from "./pages/Home";
import { SearchContextProvider } from "./context/search-context";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <SearchContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <Notifications />
          <Footer />
        </div>
      </SearchContextProvider>
    </Router>
  );
}

export default App;
