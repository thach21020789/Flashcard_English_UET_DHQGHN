// import { toast } from 'react-toastify';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './SavedFlashcard.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import TinderCard from 'react-tinder-card'
class SavedFlashcard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexWord: 0,
            hovered: false,
            vietNamese: "",
            words: [{}],
            isFlipped: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleToPlaySound = this.handleToPlaySound.bind(this);
    }

    async componentDidMount() {

        // check login
        let checkAuth = await axios.get(
            `http://localhost:3001/user`,
            { withCredentials: true }
        );
        let user = checkAuth.data.user;
        if (!user) {
            this.props.history.push("/login");
        }

        let res = await axios.get(
            `http://localhost:3001/save-flashcard/${user.id}`,
            { withCredentials: true }
        );

        this.setState({
            words: res.data
        })

    }


    handleMouseOver = () => {
        this.setState({ hovered: true });
    };

    handleMouseOut = () => {
        this.setState({ hovered: false });
    };

    handleToPlaySound = (event) => {
        const { indexWord, words } = this.state;
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = words[indexWord].word;
        window.speechSynthesis.speak(utterance);
        event.stopPropagation()
    }

    handleFlip = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    soundIcon = (
        <div className='volum' onClick={(event) => this.handleToPlaySound(event)}>
            <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
        </div>
    );

    render() {
        return (
            <>
                <div className='card-container'>
                    <div className="card-list">
                        {this.state.words.map((word, index) => {

                            return (
                                <TinderCard className='TinderCard'>
                                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" onKeyDown={(e) => this.handleKeyDown(e)}>
                                        <div className="card">
                                            {this.soundIcon}
                                            <div className='content-front'>{word.word} </div>
                                            <div className='wordtype' style={{ color: "black" }}>{word.wordtype}</div>
                                            <div className='wordIPA' style={{ color: "black" }}>{word.IPA}</div>
                                            <div className='vietNamese' style={{ color: "black" }}>{word.vietnamese}</div>
                                        </div>

                                        <div className="card">
                                            {this.soundIcon}
                                            <div className='content-front-definition'>{word.definition}</div>
                                        </div>
                                    </ReactCardFlip>
                                </TinderCard>
                            )
                        })}
                    </div>

                    <div className="buttonContainer">

                        <button type='button' className="buttonFlip" onClick={() => this.handleFlip()}
                            onMouseOver={() => this.handleMouseOver()}
                            onMouseOut={() => this.handleMouseOut()}
                        >Flip</button>
                    </div>
                </div>

            </>
        )
    }
}

export default withRouter(SavedFlashcard);