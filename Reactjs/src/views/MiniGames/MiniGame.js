import React from "react";
import './MiniGame.scss';

class MiniGame extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = true;
        document.body.appendChild(script);
      }
      useEffect(() => {
        // This code will run after the component has been rendered
      }, [])

    play() {
        var myWords = ["EGG", "MILK", "BUTTER", "JAM", "OATS",
        "SUGAR", "BREAD", "RUSK"];
        var tempWord = [];
        var selectedWord = '';
        
    }
    render(){
        return(
            <>
                <div>
                    <h1>WORD SEARCH GAME</h1>
                    <div id = "container">
                        <div id = "hint"></div>
                        <div id = "letters"></div>
                    </div>
                </div>
            </>        
        )
    }
}

export default MiniGame;
