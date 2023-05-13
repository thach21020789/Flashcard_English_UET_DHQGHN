import React from "react";
import "./Level.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
        };
    }
    handleEasyLevel = () => {
        this.props.history.push(
            {
                pathname: "Level",
                state: {
                    level: "easy"
                }
            }
        );
    }
    handleNormalLevel = () => {
        this.props.history.push(
            {
                pathname: "Level",
                state: {
                    level: "medium"
                }
            }
        );
    }

    handleHardlLevel = () => {
        this.props.history.push(
            {
                pathname: "Level",
                state: "hard"
            }
        );
    }

    render() {
        return (
            // <div> Hello</div>
            <div className="topic">
                <div className="topic-title">Choose level</div>
                <ol className="topic-container">
                    <li style={{ accent: "#0D6EFD" }} className="easy-word" onClick={() => this.handleEasyLevel()}>
                        <div class="icon"><i class="fa-regular fa-face-smile"></i></div>
                        <div class="title">EASY</div>
                        <div class="descr">The lowest level</div>
                    </li>

                    <li style={{ accent: "#0D6EFD" }} className="normal-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-regular fa-face-rolling-eyes"></i></div>
                        <div class="title">MEDIUM</div>
                        <div class="descr">The medium level</div>
                    </li>
                    <li style={{ accent: "#0D6EFD" }} className="hard-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-regular fa-face-angry"></i></div>
                        <div class="title">HARD</div>
                        <div class="descr">The highest level</div>
                    </li>
                </ol>
            </div>
        )
    }

}

export default withRouter(Level);