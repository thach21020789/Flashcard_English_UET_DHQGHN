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
            <>
                <h1 className="level-header">Chọn chủ đề</h1>
                <ol className="topic-container">
                    
                    <li style={{ accent: "#0D6EFD" }} className="easy-word" onClick={() => this.handleEasyLevel()}>
                        <div class="icon"><i class="fa-brands fa-codepen"></i></div>
                        <div class="title">EASY</div>
                        <div class="descr">The lowest level</div>
                    </li>

                    <li style={{ accent: "#0D6EFD" }} className="normal-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-brands fa-html5"></i></div>
                        <div class="title">MEDIUM</div>
                        <div class="descr">The medium level</div>
                    </li>
                    <li style={{ accent: "#0D6EFD" }} className="hard-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-brands fa-css3"></i></div>
                        <div class="title">HARD</div>
                        <div class="descr">The highest level</div>
                    </li>
                </ol>
            </>
        )
    }

}

export default withRouter(Level);