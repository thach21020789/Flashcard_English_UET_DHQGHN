
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Flashcard.scss'
class Flashcard extends React.Component {

    handleClick = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    state = {
        i: 0,
        words: [
            {
                word: "Build",
                meaning: "Xay dung"
            }
        ]
    }

    render() {
        let content = this.state.words[0].word;
        return (
            <div className='card-container'>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div onClick={this.handleClick} className="card">
                        <div className='content-front'>{content} </div>
                    </div>

                    <div onClick={this.handleClick} className="card">
                        <div className='content-front'>Xin chao</div>
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}

export default Flashcard;