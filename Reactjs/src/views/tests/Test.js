import React from "react";
import ReactCardFlip from "react-card-flip";
import "./Test.scss";
class Test extends React.Component {

    render() {
        return (
            // <div> Hello</div>
            <>
                <h1>Please chose</h1>
                <ol>
                    <li style={{accent: "#0D6EFD"}} className ="easy-word" >
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

export default Test;