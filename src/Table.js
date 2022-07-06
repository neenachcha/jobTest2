import React from 'react';

class Table extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: null
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.data !== this.props.data) ||  (prevProps.filterWord !== this.props.filterWord)) {
      var body = this.props.data.map((catagory, key) => {
        if (catagory.toLowerCase().includes(this.props.filterWord.toLowerCase())) {
          return (<tr key={key}><td>{catagory}</td></tr>)
        }
        return null;
      })
      this.setState({
        body: body
      })
    }
  }

  render () {
    return (
      <table>
        <tbody>{this.state.body}</tbody>
      </table>
    )
  }
}

export default Table;

