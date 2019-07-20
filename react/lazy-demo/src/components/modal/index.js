import React, { Component } from 'react';
import './style.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal" style={ this.props.status ? { visibility: "visible" } : { visibility: "hidden"} }>
        <h3 className="modal-header">弹窗</h3>
        <div>
          <p>hi， 我是一个小弹窗，hhhh</p>
          <button type="button" onClick={this.props.handleClick}>关闭</button>
        </div>
      </div>
    )
  }
}
