import React, { useState } from 'react';
import axios from 'axios';
import './Search.scss';

const Search = () => {
    const [word, setWord] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("check result before get: ", result)
        try {
            const result = await axios.get(`http://localhost:3001/search/${word}`,
             { withCredentials: true });

            setResult(result.data)
            
        } catch (error) {
            console.log(error.data)
            setError(error.data.error);
        }
        console.log("result: ", result)
    };

    return (
            <form className='search-form' onSubmit={handleSubmit}>
                <input type="text" id="word" required value={word} onChange={(e) => setWord(e.target.value)} />
                <button type="submit">Search</button>
                {result && result.word && <div className="result-word">{result.word}</div>}
                {result && result.IPA && <div className="result-IPA">{result.IPA}</div>}
                {result && result.wordtype && <div className="result-wordtype">{result.wordtype}</div>}
                {result && result.definition && <div className="result-definition">{result.definition}</div>}
                {result && result.vietnamese && <div className="result-vietnamese">{result.vietnamese}</div>}
            </form>
    );
};

export default Search;