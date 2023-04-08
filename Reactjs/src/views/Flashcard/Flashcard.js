
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.scss';
import axios from 'axios';

class Flashcard extends React.Component {

    handleClick = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    state = {
        i: 0,
        words: [
            { word: "Hello", definition: "Used as a greeting or to begin a telephone conversation." },
            { word: "Goodbye", definition: "Used to express good wishes when parting or at the end of a conversation." },
            { word: "Yes", definition: "Used to give an affirmative response." },
            { word: "No", definition: "Used to give a negative response." },
            { word: "Please", definition: "Used to ask for something in a polite way." },
            { word: "Thank you", definition: "Used to express gratitude or appreciation." },
            { word: "Sorry", definition: "Used to apologize or express regret." },
            { word: "Excuse me", definition: "Used to politely ask someone to move or to get someone's attention." }
        ]
    }

    async componentDidMount() {
        let res = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/cut");
        this.setState({
            words : res.data ? res.data : []
        })
        console.log(">>> check data", res
        )
    }

    handleNextWord = () => {
        let tmp = this.state.i;
        if (this.state.i < this.state.words.length - 1) {
            this.setState({
                i: tmp + 1
            })
        } else {
            this.setState({
                i: this.state.words.length - 1
            })
        }
    }

    render() {
        let { i, words } = this.state;
        console.log(i);
        let wordEnglish = words[i].word;
        let definitions = words[i].definition
        return (
            <>
                <div className='card-container'>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClick} className="card">
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClick} className="card">
                            <div className='content-front'>{definitions}</div>
                            <div>
                                <button type='button' onClick={() => this.handleNextWord()}>next word</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            </>
        )
    }
}

export default Flashcard;