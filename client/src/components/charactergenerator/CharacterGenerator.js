import React, { Component } from 'react';
import DiceRoller from '../common/DiceRoller';
import DiceDisplay from '../dicedisplay/DiceDisplay';
import PropTypes from 'prop-types';

class CharacterGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { dicecount: 1, sidecount: 6, modifier: 0 };

    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleSideChange = this.handleSideChange.bind(this);
    this.handleModifierChange = this.handleModifierChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCountChange(event) {
    this.setState({ dicecount: event.target.value });
  }

  handleSideChange(event) {
    this.setState({ sidecount: event.target.value });
  }

  handleModifierChange(event) {
    this.setState({ modifier: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      this.state.dicecount +
        ', ' +
        this.state.sidecount +
        ', ' +
        this.state.modifier
    );

    const diceRoller = new DiceRoller(
      this.state.dicecount,
      this.state.sidecount,
      this.state.modifier
    );

    var roll = diceRoller.roll();

    this.setState(state => ({
      rolls: roll.results,
      total: roll.total
    }));
    console.log(roll.results, roll.total);

    event.preventDefault();
  }

  componentDidMount() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-auto">
            <label htmlFor="dicecount">Number of Dice</label>
            <select
              className="form-control"
              id="dicecount"
              value={this.state.dicecount}
              onChange={this.handleCountChange}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </select>
          </div>
          <div className="form-group col-auto">
            <label htmlFor="sidecount">Number of Sides</label>
            <select
              className="form-control"
              id="sidecount"
              value={this.state.sidecount}
              onChange={this.handleSideChange}
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="form-group col-auto">
            <label htmlFor="modifier">Modifier</label>
            <select
              className="form-control"
              id="modifier"
              value={this.state.modifier}
              onChange={this.handleModifierChange}
            >
              <option value="-4">-4</option>
              <option value="-3">-3</option>
              <option value="-2">-2</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="1">+1</option>
              <option value="2">+2</option>
              <option value="3">+3</option>
              <option value="4">+4</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Roll Dice
        </button>

        <DiceDisplay
          rolls={this.state.rolls}
          total={this.state.total}
          modifier={this.state.modifier}
        />
      </form>
    );
  }
}

CharacterGenerator.propTypes = {
  modifier: PropTypes.number,
  sidecount: PropTypes.number,
  dicecount: PropTypes.number
};

export default CharacterGenerator;
