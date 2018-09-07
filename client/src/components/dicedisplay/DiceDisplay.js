import React, { Component } from 'react';

class DiceDisplay extends Component {
  render() {
    if (this.props.rolls) {
      const rollList = this.props.rolls;
      var rollListItems = rollList.map((roll, index) => (
        <li class="list-group-item" key={index}>
          {roll.d}d Result: {roll.roll}
        </li>
      ));
    }

    return (
      <div className="card w-25" style={{ marginTop: 1 + 'em' }}>
        <div className="card-body">
          <h5 className="card-title">Rolls</h5>

          <ul class="list-group list-group">{rollListItems}</ul>

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
