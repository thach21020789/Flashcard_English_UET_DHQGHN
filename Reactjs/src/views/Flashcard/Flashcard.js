// import { toast } from 'react-toastify';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
class Flashcard extends React.Component {

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
        this.handleClickCard = this.handleClickCard.bind(this);
        this.handleToPlaySound = this.handleToPlaySound.bind(this);
        this.handleNextWord = this.handleNextWord.bind(this);
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

        let dataFromTopicList = this.props.location.state;
        let level = dataFromTopicList.level;
        let topic = dataFromTopicList.topic;

        let res = await axios.get(
            `http://localhost:3001/group/${topic}/${level}`,
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

    handleClickCard = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
        console.log(this.state.isFlipped)
    }

    handleToPlaySound = (event) => {
        const { indexWord, words } = this.state;
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = words[indexWord].word;
        window.speechSynthesis.speak(utterance);
        event.stopPropagation()
    }
    handleNextWord = () => {

        
        let tmp = this.state.indexWord;
        if (this.state.indexWord < this.state.words.length - 1) {
            this.setState({
                indexWord: tmp + 1
            })
        }
    }

    handlePreviousWord = () => {

        let tmp = this.state.indexWord;
        if (this.state.indexWord > 0) {
            this.setState({
                indexWord: tmp - 1
            })
        } 
    }

    handleSaveWord = async (word_id) => {
        // check login
        let userResponse = await axios.get(
            `http://localhost:3001/user`,
            { withCredentials: true }
        );
        let user = userResponse.data.user

        try {
            let response = await axios.post(`http://localhost:3001/save-flashcard/`, {
                "user_id" : user.id,
                "word_id" : word_id
            })
            alert(response.data.message)
        } catch (error) {
             alert(error.response.data.error)
        }
        
    }

    soundIcon = (
        <div className='volum' onClick={(event) => this.handleToPlaySound(event)}>
            <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
        </div>
    );

    render() {
        let { indexWord, words, vietNamese } = this.state;
        let wordEnglish = words[indexWord].word;
        let wordIPA = words[indexWord].IPA;
        let wordtype = words[indexWord].wordtype;
        let definitions = words[indexWord].definition;
        let vietNameses = words[indexWord].vietnamese;

        return (
            <>
                <div className='card-container'>
                    <div className="card-list">
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>

                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='wordtype' style={{ color: "black" }}>{wordtype}</div>
                            <div className='wordIPA' style={{ color: "black" }}>{wordIPA}</div>
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                        </div>
                    </ReactCardFlip>
                    </div>
                    
                    <div className="buttonContainer">

                        <button type='button' className={`buttonPreviousWord ${this.state.indexWord > 0 ? "" : "click-disable"}`} onClick={() => this.handlePreviousWord()}
                            onMouseOver={() => this.handleMouseOver()}
                            onMouseOut={() => this.handleMouseOut()}
                        >Previous word</button>

                        <button type='button' className='buttonSaveWord' onClick={() => this.handleSaveWord(words[indexWord].id)}
                            onMouseOver={() => this.handleMouseOver()}
                            onMouseOut={() => this.handleMouseOut()}
                        >Save this word</button>

                        <button type='button' className={`buttonNextWord ${this.state.indexWord < this.state.words.length - 1 ? "" : "click-disable"}`} onClick={() => this.handleNextWord()}
                            onMouseOver={() => this.handleMouseOver()}
                            onMouseOut={() => this.handleMouseOut()} 
                        >Next word</button>

                    </div>
                </div>

            </>
        )
    }
}

export default withRouter(Flashcard);