import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import classnames from 'classnames';
import isEmpty from '../is-empty';
import correctNotification from '../audio/correct-answer.mp3';
import wrongNotification from '../audio/wrong-answer.mp3';
import buttonSound from '../audio/button-sound.mp3';
import axios from 'axios';
import '../style/styles.scss';
import '../../../../../node_modules/@mdi/font/css/materialdesignicons.min.css';


class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [{}],
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            previousRandomNumbers: [],
            time: {}
        };
        this.interval = null;
        this.correctSound = React.createRef();
        this.wrongSound = React.createRef();
        this.buttonSound = React.createRef();
    }

    async componentDidMount() {
        let { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        let result = await axios.get(`http://localhost:3001/search-random-quiz`);
        questions = result.data;
        this.setState({
            questions
        });
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions: questions.length,
                answer,
                previousRandomNumbers: []
            }, () => {
                this.showOptions();
            });
        }
    };

    handleOptionClick = (e) => {

        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctTimeout = setTimeout(() => {
                this.correctSound.current.play();
            }, 100);
            this.correctAnswer();
        } else {
            this.wrongTimeout = setTimeout(() => {
                this.wrongSound.current.play();
            }, 100);
            this.wrongAnswer();
        }
    }
    handleQuitButtonClick = () => {
        this.buttonSound.current.play();
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/MiniGame');
        }
    };

    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer!',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: 'Wrong Answer!',
            classes: 'toast-invalid',
            displayLength: 1500
        });
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
        });

        this.setState({
            usedFiftyFifty: false
        });
    }

    handleHints = () => {
        if (this.state.hints > 0) {
            const options = Array.from(document.querySelectorAll('.option'));
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            while (true) {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
                    options.forEach((option, index) => {
                        if (index === randomNumber) {
                            option.style.visibility = 'hidden';
                            this.setState((prevState) => ({
                                hints: prevState.hints - 1,
                                previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
                            }));
                        }
                    });
                    break;
                }
                if (this.state.previousRandomNumbers.length >= 3) break;
            }
        }
    }

    handleFiftyFifty = () => {
        if (this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false) {
            const options = document.querySelectorAll('.option');
            const randomNumbers = [];
            let indexOfAnswer;

            options.forEach((option, index) => {
                if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });

            let count = 0;
            do {
                const randomNumber = Math.round(Math.random() * 3);
                if (randomNumber !== indexOfAnswer) {
                    if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
                        randomNumbers.push(randomNumber);
                        count++;
                    } else {
                        while (true) {
                            const newRandomNumber = Math.round(Math.random() * 3);
                            if (!randomNumbers.includes(newRandomNumber) && newRandomNumber !== indexOfAnswer) {
                                randomNumbers.push(newRandomNumber);
                                count++;
                                break;
                            }
                        }
                    }
                }
            } while (count < 2);

            options.forEach((option, index) => {
                if (randomNumbers.includes(index)) {
                    option.style.visibility = 'hidden';
                }
            });
            this.setState(prevState => ({
                fiftyFifty: prevState.fiftyFifty - 1,
                usedFiftyFifty: true
            }));
        }
    }

    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds,
                        distance
                    }
                });
            }
        }, 1000);
    }

    endGame = () => {
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            fiftyFiftyUsed: 2 - state.fiftyFifty,
            hintsUsed: 5 - state.hints
        };
        setTimeout(() => {
            this.props.history.push('/MiniGame/Quiz/quizSumary', playerStats);
        }, 500);
    }

    render() {
        const {
            currentQuestion,
            currentQuestionIndex,
            fiftyFifty,
            hints,
            numberOfQuestions,
            time
        } = this.state;

        return (
            <Fragment>
                <Helmet><title>MiniGame | Quiz</title></Helmet>
                <Fragment>
                    <audio ref={this.correctSound} src={correctNotification}></audio>
                    <audio ref={this.wrongSound} src={wrongNotification}></audio>
                    <audio ref={this.buttonSound} src={buttonSound}></audio>
                </Fragment>
                <div className="questions">
                    <div className="lifeline-container">
                        <p>
                            <span onClick={this.handleFiftyFifty} className="mdi mdi-set-center mdi-24px lifeline-icon">
                                <span className="lifeline">{fiftyFifty}</span>
                            </span>
                        </p>
                        <p>
                            <span onClick={this.handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                                <span className="lifeline">{hints}</span>
                            </span>
                        </p>
                    </div>
                    <div className="timer-container">
                        <p>
                            <span className="left">{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                        </p>
                        <p>
                            <span className={classnames('right valid', {
                                'warning': time.distance <= 120000,
                                'invalid': time.distance < 30000
                            })}>
                                {time.minutes}:{time.seconds}
                                <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <h5>{currentQuestion.question}</h5>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                    </div>
                    <div className="button-container">
                        <button id="quit-button" onClick={this.handleQuitButtonClick}>Quit</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MultipleChoice;