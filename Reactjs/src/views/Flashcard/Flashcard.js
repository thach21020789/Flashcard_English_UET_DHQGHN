// import { toast } from 'react-toastify';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
class Flashcard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexWord: 0,
            hovered: false,
            vietNamese: "",
            words: [
                {}
            ]
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

        console.log("logged at flashcard")
        // let res = await axios.get(`http://localhost:3001/vehicle/easy`);
        // console.log("check data : ", res);
        this.setState({
            words: res.data
        })

        console.log("check state word: ", this.state.words);
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
    }

    handleToPlaySound = () => {
        const { indexWord, words } = this.state;
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = words[indexWord].word;
        window.speechSynthesis.speak(utterance);
    }
    handleNextWord = () => {
        // toast.success("next word");
        let tmp = this.state.indexWord;
        if (this.state.indexWord < this.state.words.length - 1) {
            this.setState({
                indexWord: tmp + 1
            })
        } else {
            // this.setState({
            //     indexWord: this.state.words.length - 1

            // })
            this.props.history.push("/Test/easy");
        }
    }

    soundIcon = (
        <div className='volum' onClick={() => this.handleToPlaySound()}>
            <img src="https://ngoaingu24h.vn/resources/images/new/sound.svg"></img>
        </div>
    );

    render() {
        let { indexWord, words, vietNamese } = this.state;
        // console.log(">>check index : ", indexWord); 
        console.log(">>check word: ", words);
        let wordEnglish = words[indexWord].word;
        let definitions = words[indexWord].definition;
        let vietNameses = words[indexWord].vietnamese;

        return (
            <>
                <div className='card-container'>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='content-front'>{wordEnglish} </div>
                        </div>

                        <div onClick={this.handleClickCard} className="card">
                            {this.soundIcon}
                            <div className='vietNamese' style={{ color: "black" }}>{vietNameses}</div>
                            <div className='content-front'>{definitions}</div>
                            <div>
                                <button type='button' className='buttonNextword' onClick={() => this.handleNextWord()}
                                    style={{ backgroundColor: this.state.hovered ? 'grey' : 'bisque', color: 'white' }}
                                    onMouseOver={() => this.handleMouseOver()}
                                    onMouseOut={() => this.handleMouseOut()}
                                >next word</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            </>
        )
    }
}

export default withRouter(Flashcard);