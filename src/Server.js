import ReactDOM from "react-dom";
import Details from "./Details"
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  // const theme = 'green'
  return (
    <ThemeContext.Provider value= {theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme}/>
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
<StrictMode>
  <App />
  </StrictMode>,
document.getElementById("root")
);
