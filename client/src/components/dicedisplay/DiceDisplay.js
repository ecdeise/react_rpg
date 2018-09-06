import React, { Component } from 'react';

class DiceDisplay extends Component {
  render() {
    if (this.props.rolls) {
      const rollList = this.props.rolls;
      var rollListItems = rollList.map((roll, index) => (
        <li key={index}>
          {roll.d}d Value: {roll.roll}
        </li>
      ));
    }

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <h6 className="card-subtitle mb-2">{rollListItems}</h6>
          <p className="card-text text-muted">
            Modifier: {this.props.modifier}
          </p>
          <p className="card-text">Total: {this.props.total}</p>
        </div>
      </div>
    );
  }
}

export default DiceDisplay;
