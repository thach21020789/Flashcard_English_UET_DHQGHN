// import { toast } from 'react-toastify';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import TinderCard from 'react-tinder-card';
import { Helmet } from 'react-helmet';


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

    handleToPlaySound = (event, word) => {
        const { indexWord, words } = this.state;
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = word;
        window.speechSynthesis.speak(utterance);
        event.stopPropagation()
    }

    handleFlip = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    handleSaveWord = async (word_id) => {
        console.log("check handle save word: ", word_id)
        // get user info
        let userResponse = await axios.get(
            `http://localhost:3001/user`,
            { withCredentials: true }
        );
        let user = userResponse.data.user
        console.log(user)
        console.log("check word: ", word_id)
        try {
            let response = await axios.post(`http://localhost:3001/save-flashcard/`, {
                "user_id": user.id,
                "word_id": word_id
            }, { withCredentials: true })
            console.log(response)
            alert(response.data.message)
        } catch (error) {
            alert(error.response.data.error)
        }

    }

    // soundIcon = (
    //     <div className='volum' onClick={(event) => this.handleToPlaySound(event)}>
    //         <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
    //     </div>
    // );

    render() {
        let { indexWord, words, vietNamese } = this.state;
        return (
            <>
                <Helmet><title>Flashcard</title></Helmet>

                <div className='card-container'>
                    <div className="card-list">
                        {this.state.words.map((word, index) => {

                            return (
                                <TinderCard className='TinderCard'>
                                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" onKeyDown={(e) => this.handleKeyDown(e)}>
                                        <div className="card">
                                            <div className='volum' onClick={(event) => this.handleToPlaySound(event, word.word)}>
                                                <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
                                            </div>
                                            <div className='content-front'>{word.word} </div>
                                            <div className='wordtype' style={{ color: "black" }}>{word.wordtype}</div>
                                            <div className='wordIPA' style={{ color: "black" }}>{word.IPA}</div>
                                            <div className='vietNamese' style={{ color: "black" }}>{word.vietnamese}</div>
                                        </div>

                                        <div className="card">
                                            <div className='volum' onClick={(event) => this.handleToPlaySound(event, word.word)}>
                                                <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
                                            </div>
                                            <div className='content-front-definition'>{word.definition}</div>
                                            <button type='button' className="buttonSaveWord" onClick={() => this.handleSaveWord(word.id)}
                                                onMouseOver={() => this.handleMouseOver()}
                                                onMouseOut={() => this.handleMouseOut()}
                                            >Save this word</button>
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

export default withRouter(Flashcard);