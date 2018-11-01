import React, { Component } from 'react'

class Kpi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`kpi ${this.props.type ? `kpi-${this.props.type}` : ''}`}>
        KPI
      </div>
    )
  }
}

export default Kpi;