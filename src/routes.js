import React, { startTransition } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Character from "./pages/character";
import Console from "./pages/console";
import Start from "./pages/start";

export default function Routes() {
    return (
      <div>
      <Router>
          <Switch>
            <Route path="/start" element = {<Start/>}> </Route>
            <Route path="/character" element = {<Character/>}> </Route>
            <Route path="/console" element = {<Console/>}></Route>
          </Switch>
      </Router>
      </div>
    );
  }