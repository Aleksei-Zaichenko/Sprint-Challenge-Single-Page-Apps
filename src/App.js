import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <Switch>
          <Route path="/welcomepage">
            <WelcomePage />
          </Route>
          <Route path="/characters">
            <CharacterList />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
