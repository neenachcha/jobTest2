import React from 'react';
import Input from './Input.js';
import Table from './Table.js';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
      input: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.publicapis.org/categories')
      .then((res) => {
        this.setState({data: res.data.categories});
      })
  }

  updateFilterInput(input) {
    this.setState({
      input: input
    })
  }

  render () {
    return (
      <div className="App">
        <Input updateFilter={this.updateFilterInput.bind(this)}/>
        <Table data={this.state.data} filterWord={this.state.input}/>
      </div>
    );
  }
}

export default App;
