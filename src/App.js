import Home from "./pages/Home";
import { SearchContextProvider } from "./context/search-context";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <SearchContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:imdbID" component={Movie} />
          </Switch>
          <Notifications />
          <Footer />
        </div>
      </SearchContextProvider>
    </Router>
  );
}

export default App;
