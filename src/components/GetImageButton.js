import React, { Component } from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
        <form onSubmit={this.props.fetchRoverImage}>
          <button type='submit' className="btn btn-danger">Get Rover Images!</button>
        </form>
    );
  }
}
