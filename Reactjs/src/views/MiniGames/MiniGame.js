import React from "react";
import './MiniGame.scss';

class MiniGame extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = true;
        document.body.appendChild(script);
        // this.setIndividualAttribute(7, "A", "");  
      }

    render(){
        var myWords = ["EGG", "MILK", "BUTTER", "JAM", "OATS",
        "SUGAR", "BREAD", "RUSK"];
        var tempWord = [];
        var selectedWord = '';
        


        const rows = 12;
        const columns = 12;
        const individualElements = [];

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
              individualElements.push(
                <div className="individual" data-row={i} data-column={j} data={"A"} key={`${i}-${j}-${"A"}`} />
              );
            }
        }

        var positions = ["row", "column"];
        var nextLetter = 0;
        var newStart = 0;

        for (let i = 0; i<myWords.length; i++) {
            const orientation = positions[Math.floor(Math.random() * positions.length)];
            // console.log(orientation);
            const start = Math.floor(Math.random() * individualElements.length);
            // const individualElement = this.individualElements[start].querySelector('.individual');
            //const rowData = this.individualElements[start].querySelector('.individual').dataset.row;
                        // const myColumn = parseInt(individualElements[start].querySelector.dataset.row);

        }
        return(
            <>
                <div>
                    <h1>WORD SEARCH GAME</h1>
                    <div id = "container">
                        <div id = "hint">
                            {myWords.map((word, index) => (
                                <p key={index}>{word}</p>
                            ))}
                        </div>

                        <div id = "letters" ref={this.individualElementsRef}>
                            {individualElements}
                        </div>
                    </div>
                </div>
            </>        
        )
    }
}

export default MiniGame;


