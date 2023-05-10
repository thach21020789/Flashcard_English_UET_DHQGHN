import React, { useEffect, useState } from 'react'
import "./MiniGame.scss"
import Wordle from './components/Wordle';
import Help from './components/Help';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function MiniGame() {

  const [solution, setSolution] = useState('');
  const [open, setOpen] = useState(false);
  // check login
  const history = useHistory();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user`, { withCredentials: true });
        const user = response.data.user;
        if (!user) {
          history.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, [history]);
  
  useEffect(() => {
    const fetchRandomWord = async () => {
      try {
        const response = await axios.get('http://localhost:3001/search-random', { withCredentials: true });
        setSolution(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomWord();
  }, []);


  return (
    <>
      <div className="minigame">
        <h1>MiniGame
          <i className="fa-solid fa-circle-question" onClick={() => setOpen(true)}></i>
          {<Help open={open} onClose={() => setOpen(false)} />}

        </h1>
        {solution && <div className="hint">Hint: {solution.category}</div>}
        {solution && <Wordle solution={solution.word} />}
      </div>
    </>
  )
}

export default MiniGame