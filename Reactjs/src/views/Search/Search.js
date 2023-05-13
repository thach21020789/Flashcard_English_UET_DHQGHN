import React, { Component } from 'react';
import axios from 'axios';
import './Search.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: '',
            result: '',
            error: '',
            susggest: [{}],
            isTyping: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleShowSuggestion = this.handleShowSuggestion.bind(this);
    }



    async componentDidMount() {
        // check login
        let checkAuth = await axios.get(
            `http://localhost:3001/user`,
            { withCredentials: true }
        );
        let user = checkAuth.data.user;
        if (!user) {
            this.props.history.push("/login");
        }

    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log("check result before get: ", this.state.result)
        try {
            const response = await axios.get(`http://localhost:3001/search/${this.state.word}`,
                { withCredentials: true });

            this.setState({ result: response.data[0], isTyping: false });

        } catch (error) {
            console.log(error.data)
            this.setState({ error: error.data.error });
        }
        console.log("result: ", this.state.result)
    }

    async handleShowSuggestion(word) {
        let susggest = this.state.susggest;
        console.log("word check: ", word)
        try {
            const response = await axios.get(`http://localhost:3001/search/${word}`,
                { withCredentials: true });
            this.setState({ susggest: response.data });
        } catch (error) {
            console.log(error.data)
            // this.setState({ error: error.data.error });  
        }
    }
    async handleChooseWord(choosedWord) {
        console.log("check result before get: ", this.state.result)
        try {
            const response = await axios.get(`http://localhost:3001/search/${choosedWord}`,
                { withCredentials: true });

            this.setState({ result: response.data[0] });
        } catch (error) {
            console.log(error)
            this.setState({ error: error });
        }
        console.log("result: ", this.state.result)
    }

    async handleOnBlur(event) {
        if (event) {
            console.log("blur", this.state.isTyping);
            this.setState({ isTyping: false })
            event.stopPropagation();
        }
    }




    async handleOnFocus(event) {
        if (event) {
            this.setState({ isTyping: true });
            console.log("focus", this.state.isTyping);
            event.stopPropagation();
        }
    }

    render() {
        const { word, result, susggest } = this.state;


        return (
            <div>

                <div onClick={(e) => { this.handleOnBlur(e) }}>
                    <h1 className='title-search' >Search your word</h1>
                    <form className='search-form' onSubmit={this.handleSubmit} >
                        <input type="text" className="word" required value={word} onChange={(e) => { this.setState({ word: e.target.value }); this.handleShowSuggestion(e.target.value); this.setState({ isTyping: true }) }} onClick={(e) => { this.handleOnFocus(e) }} />

                        <button type="submit" className="fa-solid fa-magnifying-glass" > Search</button>
                        {this.state.isTyping && <div className='suggestion-box'>
                            {
                                susggest.map((item, index) => {
                                    return (
                                        <ul key={index} >
                                            <div className='word-suggest' onClick={(e) => { this.setState({ word: item.word }); this.handleChooseWord(item.word); this.setState({ isTyping: false }) }}>{item.word}</div>
                                        </ul>
                                    );
                                })
                            }
                        </div>}


                    </form>
                    <div className='result-search'>
                        {result && result.word && <span className="result-word">{result.word}</span>}
                        {result && result.wordtype && <span className="result-wordtype">({result.wordtype}) </span>}
                        {result && result.vietnamese && <span className="result-vietnamese">{result.vietnamese}</span>}
                        {result && result.IPA && <div className="result-IPA">{result.IPA}</div>}
                        {result && result.definition && <div className="result-definition-header">Definition:</div>}
                        {result && result.definition && <div className="result-definition">{result.definition}</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);