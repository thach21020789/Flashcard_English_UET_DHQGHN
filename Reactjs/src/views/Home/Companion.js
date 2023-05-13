import "./HomeStyle/Companion.scss"
import CompanionData from "./CompanionData";
import Person1 from "../assets/img/1.jpg";
import Person2 from "../assets/img/2.jpg";
import Person3 from "../assets/img/3.jpg";


function Companion() {
    return (
        <div className="trip">
            <h1>Companion</h1>
            <p>We will help you in your studying English. </p>
            <div className="tripcard">
                <CompanionData
                    image={Person1}
                    heading="Don't be afraid of failure!" 
                    text="You’ll never be brave if you do not get hurt.
                    You’ll never learn if you do not make mistakes. 
                    You’ll never be successful if you do not encounter failure."   
                />
                <CompanionData

                    image={Person2}
                    heading="Be careful with everything you do!" 
                    text="Sow a thought, and you reap an act. 
                    Sow an act, and you reap a habit. 
                    Sow a habit, and you reap a character. 
                    Sow a character, and you reap a destiny."    
                />
                <CompanionData
                    image={Person3}
                    heading="Never stop trying!" 
                    text="Thomas Edison said that: Genius Is One Percent Inspiration And Ninety-nine Percent Perspiration."    
                />
                <CompanionData
                    image={Person3}
                    heading="Thinking to improve!" 
                    text="An apology has three parts “I’m sorry”, 
                    “It’s my fault”,and “How can I make things better”. 
                    The last part is most important."
                />
            </div>
        </div>
    );
}

export default Companion;