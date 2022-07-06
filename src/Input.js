import React from 'react';

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange (event) {
    this.setState({
      input: event.target.value
    }, () => {
      this.props.updateFilter(this.state.input);
    })
  }

  render () {
    return (
      <input type="text" onChange={this.handleChange.bind(this)} name="input" id="input" value={this.state.input}></input>
    )
  }
}

export default Input;