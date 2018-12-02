import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import JobPost from './JobPost'

export default class FormModal extends React.Component {
  render() {
    return (
        <Modal open={this.props.open} onClose={this.props.onClose} >
          <JobPost />
        </Modal>
    );
  }
}