// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Flashcard from './Flashcard/Flashcard';
import Nav from './Nav/Nav.js';
import Home from './Home/Home';
import MiniGame from './MiniGames/MiniGame';
import TopicList from './tests/TopicList';
import Test from './tests/Test';
import Search from './Search/Search';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyComponent from './Mycomponent';

function App() {
  return (
    <>
      {/* <MyComponent></MyComponent> */}
      <BrowserRouter>
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
                <Test></Test>
              </Route>
              <Route path="/Test/easy" exact>
                <TopicList></TopicList>
              </Route>
              <Route path = "/mainFlashcard" exact>
                <Flashcard></Flashcard>
              </Route>
              <Route path = "/Search" exact>
                  <Search></Search>
              </Route>
            </Switch>
          </header>
          {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
