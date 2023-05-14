import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount() {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render() {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did great!';
        } else {
            remark = 'You\'re an absolute genius!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }} className='quiz-summary'>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1 className='Quiz-title'>Quiz has ended</h1>
                    <div className="khong-biet-dat-ten-gi-nua">
                        <h4 className='advice'>{remark}</h4>

                        <h2 className='Score'>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <div className='Info-quiz-sum'>
                            <span className="stat-left">Total number of questions: </span>
                            <span className="stat-right">{this.state.numberOfQuestions}</span><br />

                            <span className="stat-left">Number of attempted questions: </span>
                            <span className="stat-right">{this.state.numberOfAnsweredQuestions}</span><br />

                            <span className="stat-left">Number of Correct Answers: </span>
                            <span className="stat-right">{this.state.correctAnswers}</span> <br />

                            <span className="stat-left">Number of Wrong Answers: </span>
                            <span className="stat-right">{this.state.wrongAnswers}</span><br />

                            <span className="stat-left">Hints Used: </span>
                            <span className="stat-right">{this.state.hintsUsed}</span><br />

                            <span className="stat-left">50-50 Used: </span>
                            <span className="stat-right">{this.state.fiftyFiftyUsed}</span>
                        </div>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to="/Minigame/Quiz">Play Again</Link>
                            </li>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>

                            <Link to="/Minigame">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz - Summary</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;