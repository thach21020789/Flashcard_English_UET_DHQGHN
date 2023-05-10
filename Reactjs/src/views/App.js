import './App.scss';
import Flashcard from './Flashcard/Flashcard';
import Nav from './Nav/Nav.js';
import Home from './Home/Home';
import MiniGame from './MiniGames/MiniGame';
import Search from './Search/Search';
import Login from './Admins/Login/Login';
import Level from  "./Flashcard/Levels/Level";
import TopicList from  "./Flashcard/Levels/TopicList";
import Register from './Admins/Register/Register';
import ForgotPassword from './Admins/ForgotPassword/ForgotPassword';
import ResetPassword from './Admins/ForgotPassword/ResetPassword';
import User from './Admins/User/User'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      { }
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>

          <Route path="/register" exact>
            <Register></Register>
          </Route>

          <Route path="/forgot-password" exact>
            <ForgotPassword></ForgotPassword>
          </Route>

          <Route path="/reset-password/:token" exact>
            <ResetPassword></ResetPassword>
          </Route>

          <Route>

            <Nav></Nav>
            <div className="App">
              <header className="App-header">
                <Switch>
                  <Route path="/Home" exact>
                    <Home></Home>
                  </Route>
                  <Route path="/MiniGame" exact>
                    <MiniGame></MiniGame>
                  </Route>
                  <Route path="/Flashcard" exact>
                    <Level></Level>
                  </Route>
                  <Route path="/Level" exact>
                    <TopicList></TopicList>
                  </Route>
                  <Route path="/mainFlashcard" exact>
                    <Flashcard></Flashcard>
                  </Route>
                  <Route path="/Search" exact>
                    <Search></Search>
                  </Route>
                  <Route path="/User" exact>
                    <User></User>
                  </Route>
                </Switch>
              </header>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
