import React, { Component } from 'react';

//functional component 
// const SearchBar = () => {
//     return <input /> 
// }

//class-based component 
class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;