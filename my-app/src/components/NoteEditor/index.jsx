/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-onchange */
import React, { Component } from 'react';
import optionList from '../config/option-list.json';

export default class NoteEditor extends Component {
  state = {
    text: '',
    rate: '',
  };

  handleSubmit = e => {
    const { text, rate } = this.state;

    e.preventDefault();
    this.props.onSubmit(text, rate);
  };

  handleChangeArea = ({ target: { value } }) => {
    this.setState({
      text: value,
    });
  };

  handleChangeSelect = ({ target: { value } }) => {
    this.setState({
      rate: value,
    });
  };

  render() {
    const { rate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChangeArea} placeholder="Your comment" />
        <label>
          Chose rate
          <select name="rate" value={rate} onChange={this.handleChangeSelect}>
            <option value="" disabled>
              ...
            </option>
            {optionList.map(item => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}
