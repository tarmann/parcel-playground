import React, { Component } from 'react'
import css from './PublishModal.sass'

class PublishModal extends Component {

  static options = {
    'default': {
      name: 'Tony Stark',
      age: 33
    },
    'one': {
      name: 'Bruce Banner',
      age: 42
    },
    'two': {
      name: 'Peter Parker',
      age: 16
    }
  };

  getConfig(modalType){
    const options = PublishModal.options;
    return options[modalType] || options['default'];
  }

  render() {
    const { name, age } = this.getConfig(this.props.modalType);

    return (
      <div>
        <h1>Publish Modal: {this.props.modalType}</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    )

  }
}

export default PublishModal
