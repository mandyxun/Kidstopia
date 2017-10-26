import React, { Component } from 'react';

class SearchBar extends Component {
  
  //whenever create an instance of a searchbar component, this function will be call automatically 
  constructor(props) {
    //call parent class 
    super(props);

    //initialize a state in Class-based component 
    this.state = {term: ''};//this object has a property term, when user type input, term will be update and record state
  }

  render() {
  return (
    <div className="search-bar">
      <input 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
    </div>);
  }

  onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
  }
  
//ES6
// render() {
//   return <input onChange={(event) => this.setState({term: event.target.value})} />;
// }

}

export default SearchBar;