import React from "react";
import "./Search.scss";
import axios from "axios";
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            searchResults: []
          };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Phương thức xử lý tìm kiếm
    handleSearch(event) {
        event.preventDefault();
        const { searchTerm } = this.state;
        // Gửi yêu cầu tới API để truy xuất cơ sở dữ liệu
        axios.get(`https://your-api-url.com/search?term=${searchTerm}`)
          .then(response => {
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
        const { searchTerm,searchResults } = this.state;
        return (
            <>
                <form onSubmit={this.handleSearch}>
                    <input type="text" value={searchTerm} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    
                </ul>
            </>
        );
    }
}

export default Search;