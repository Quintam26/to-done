import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  state = { 
    editing: false,
    key: null,
    name: '',
    type: ''
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {

  }

  // handleSubmit = event => {

  // };

  // handleChange = ({ target }) => {

  // };

  render() {
    const { key, name, type } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="type" value={type} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default NoteForm;