import './App.scss';

import Login from './Admins/Login/Login';
import Register from './Admins/Register/Register';
import ForgotPassword from './Admins/ForgotPassword/ForgotPassword';
import ResetPassword from './Admins/ForgotPassword/ResetPassword';
import Flashcard from './Flashcard/Flashcard';
import Home from './Home/Home';
import ChooseGame from './MiniGames/ChooseGame';
import Quiz from './MiniGames/Quiz/components/MultipleChoice';
import quizSumary from './MiniGames/Quiz/components/QuizSummary';
import Wordle from './MiniGames/Wordle/MiniGame';
import Nav from './Nav/Nav.js';
import Search from './Search/Search';
import Level from "./Flashcard/Levels/Level";
import TopicList from "./Flashcard/Levels/TopicList";
import User from "./Admins/User/User"
import SavedFlashcard from "./Admins/User/SavedFlashcard"
import { Helmet } from 'react-helmet';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Helmet><title>Flashcard</title></Helmet>
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
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/MiniGame" exact component={ChooseGame} />
                <Route path="/MiniGame/Wordle" exact component={Wordle} />
                <Route path="/MiniGame/Quiz" exact component={Quiz} />
                <Route path="/MiniGame/Quiz/quizSumary" exact component={quizSumary} />
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
                <Route path="/User/Collection" exact>
                  <SavedFlashcard></SavedFlashcard>
                </Route>
                <Route path="/" exact component={Home} />
              </Switch>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;



