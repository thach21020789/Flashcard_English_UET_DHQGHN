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
                    heading="I'm ChatGPT" 
                    text="Hello! I am ChatGPT,
                    a language model trained by OpenAI.
                    I am designed to understand natural language and communicate with humans
                    in a conversational manner.
                    My purpose is to assist and provide information to users,
                    as well as engage in conversations on a wide range of topics.
                    I have access to a vast amount of knowledge and can answer questions on various subjects,
                    including science, technology, history, and more.
                    I am always here to help and eager to learn from our interactions."   
                />
                <CompanionData

                    image={Person2}
                    heading="I'm ChatGPT" 
                    text="Hello! I am ChatGPT,
                    a language model trained by OpenAI.
                    I am designed to understand natural language and communicate with humans
                    in a conversational manner.
                    My purpose is to assist and provide information to users,
                    as well as engage in conversations on a wide range of topics.
                    I have access to a vast amount of knowledge and can answer questions on various subjects,
                    including science, technology, history, and more.
                    I am always here to help and eager to learn from our interactions."    
                />
                <CompanionData
                    image={Person3}
                    heading="I'm ChatGPT" 
                    text="Hello! I am ChatGPT,
                    a language model trained by OpenAI.
                    I am designed to understand natural language and communicate with humans
                    in a conversational manner.
                    My purpose is to assist and provide information to users,
                    as well as engage in conversations on a wide range of topics.
                    I have access to a vast amount of knowledge and can answer questions on various subjects,
                    including science, technology, history, and more.
                    I am always here to help and eager to learn from our interactions."    
                />
                <CompanionData
                    image={Person3}
                    heading="I'm ChatGPT" 
                    text="Hello! I am ChatGPT,
                    a language model trained by OpenAI.
                    I am designed to understand natural language and communicate with humans
                    in a conversational manner.
                    My purpose is to assist and provide information to users,
                    as well as engage in conversations on a wide range of topics.
                    I have access to a vast amount of knowledge and can answer questions on various subjects,
                    including science, technology, history, and more.
                    I am always here to help and eager to learn from our interactions."
                />
            </div>
        </div>
    );
}

export default Companion;