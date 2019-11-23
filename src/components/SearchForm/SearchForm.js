import React from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  resetField() {
    this.setState({query: ''})
  }

  queryHandler() {
    
  }
}

export default SearchForm;