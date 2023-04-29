import React from "react";
import "./Search.scss";
import axios from "axios";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchResults: { word: "Hello world", vietnamese: "Xin chao", definenation: "to make friend" }
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    // Phương thức xử lý tìm kiếm
    async handleSearch(event) {
        event.preventDefault();
        const { searchTerm } = this.state;
        console.log("Search")

        // Gửi yêu cầu tới API để truy xuất cơ sở dữ liệu
        await axios.get(`http://localhost:3001/search/${searchTerm}`) //localhost:3001/category/search/${searchTerm}
            .then(response => {
                console.log(response.data)
                this.setState({ searchResults: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Phương thức xử lý khi giá trị ô tìm kiếm thay đổi
    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }
    render() {
        const { searchTerm, searchResults } = this.state;
        return (
            <>
                <form onSubmit={this.handleSearch}>
                    <input type="text" value={searchTerm} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
                <ul className="result-search-box">
                    {/* <li>{searchResults.vietnamese}</li>
                    <li>{searchResults.definenation}</li> */}
                </ul>
            </>
        );
    }
}

export default withRouter(Search);