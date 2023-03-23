
import './App.scss';
import Flashcard from './Flashcard/Flashcard';
import Nav from './Nav/Nav.js';
import Home from './Home/Home';
import MiniGame from './MiniGames/MiniGame';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/Home" exact>
                <Home></Home>
              </Route>
              <Route path="/Flashcard" exact>
                <Flashcard></Flashcard>
              </Route>
              <Route path="/MiniGame" exact>
                <MiniGame></MiniGame>
              </Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
