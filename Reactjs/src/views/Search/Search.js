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
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

            this.setState({ result: response.data });
        } catch (error) {
            console.log(error.data)
            this.setState({ error: error.data.error });
        }
        console.log("result: ", this.state.result)
    }

    render() {
        const { word, result } = this.state;

        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <input type="text" id="word" required value={word} onChange={(e) => this.setState({ word: e.target.value })} />
                <button type="submit">Search</button>
                {result && result.word && <div className="result-word">{result.word}</div>}
                {result && result.IPA && <div className="result-IPA">{result.IPA}</div>}
                {result && result.wordtype && <div className="result-wordtype">{result.wordtype}</div>}
                {result && result.definition && <div className="result-definition">{result.definition}</div>}
                {result && result.vietnamese && <div className="result-vietnamese">{result.vietnamese}</div>}
            </form>
        );
    }
}

export default withRouter(Search);