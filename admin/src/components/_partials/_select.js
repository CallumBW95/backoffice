import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="select">
        <select>
          <option value='0'>{this.props.title}</option>
          {this.props.options.map(({id, value}) => (
            <option key={id} value={id}>{value}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default Select