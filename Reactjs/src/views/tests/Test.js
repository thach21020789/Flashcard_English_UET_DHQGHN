import React from "react";
import "./Test.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Test extends React.Component {
    handleClickEasyWord = () =>{
        this.props.history.push("/Test/easy");
    }
    render() {
        return (
            // <div> Hello</div>
            <>
                <h1>Please chose</h1>
                <ol className="topic-container">
                    <li style={{accent: "#0D6EFD"}} className ="easy-word" onClick={() => this.handleClickEasyWord()}>
                        <div class="icon"><i class="fa-brands fa-codepen"></i></div>
                        <div class="title">Easy</div>
                        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
                    </li>

                    <li  style={{accent: "#0D6EFD"}} className ="normal-word">
                        <div class="icon"><i class="fa-brands fa-html5"></i></div>
                        <div class="title">Normal</div>
                        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </li>
                    <li style={{accent: "#0D6EFD"}} className = "hard-word">
                        <div class="icon"><i class="fa-brands fa-css3"></i></div>
                        <div class="title">Hard</div>
                        <div class="descr">Lorem ipsum dolor sit.</div>
                    </li>
                </ol>
            </>
        )
    }

}

export default withRouter(Test);