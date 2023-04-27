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
                <h1>Chọn chủ đề</h1>
                <ol className="topic-container">
                    <li style={{ accent: "#0D6EFD" }} className="easy-word" onClick={() => this.handleEasyLevel()}>
                        <div class="icon"><i class="fa-brands fa-codepen"></i></div>
                        <div class="title">Dễ</div>
                        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
                    </li>

                    <li style={{ accent: "#0D6EFD" }} className="normal-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-brands fa-html5"></i></div>
                        <div class="title">Trung bình</div>
                        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </li>
                    <li style={{ accent: "#0D6EFD" }} className="hard-word" onClick={() => this.handleNormalLevel()}>
                        <div class="icon"><i class="fa-brands fa-css3"></i></div>
                        <div class="title">Khó</div>
                        <div class="descr">Lorem ipsum dolor sit.</div>
                    </li>
                </ol>
            </>
        )
    }

}

export default withRouter(Level);