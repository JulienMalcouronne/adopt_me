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
      <div
      className= "p-0 m-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
      >
        <Router>
          <header
          className= "w-full mb-10 mp-tx text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link to="/" className="text-6x1 text-white hover:text-gray-200">
              Adopt Me!
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
