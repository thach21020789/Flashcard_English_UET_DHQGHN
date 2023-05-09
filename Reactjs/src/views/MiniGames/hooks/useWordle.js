import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);//each guess is an array
    const [history, setHistory] = useState(["ninja"]);//each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

     //format a guess into a array of letter objects
    //ex: [{key: 'a', color:'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l.toLocaleUpperCase(), color:'grey'}
        });

        //find any green letter
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        })

        //find any yellow colors
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !=='green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        })
        return formattedGuess;
    } 

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess.toLocaleUpperCase() === solution) {
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess;
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key]
                if (l.color === "green") {
                    newKeys[l.key] = "green";
                    return;
                }
                if (l.color === "yellow" && currentColor !== "green") {
                    newKeys[l.key] = "yellow";
                    return;
                }
                if (l.color === "grey" && currentColor !== "green" && currentColor !== "yellow") {
                    newKeys[l.key] = "grey";
                    return;
                }
            })
            return newKeys;
        })
        setCurrentGuess('')
    } 

    const handleKeyDown = ({key}) => {
        if (key === 'Enter') {
            return
        }
    }
    //handle keyup event & track current guess
    //if user presses enter, add the new guess
    const handleKeyup = ({key}) => {

        // console.log(key);

        if (key === "Enter") {
            //only add guess if turn is more than 5
            if (turn > 5) {
                console.log('you used all your guesses')
                return;
            }
            //don't allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('you already tried that word');
                return;
            }

            //check word is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long')
                return;
            }
            const formatted = formatGuess();
            addNewGuess(formatted)
        }
        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect,usedKeys, handleKeyup, handleKeyDown};
}
export default useWordle;