import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Modal extends Component {

  modalComponent = () => {
    const props = this.props;
    const height = props.height || '300px';
    if(!props.status) {
      return null;
    }
    return (
      <div>
        <div className="modal-mask" onClick={props.onClose}></div>
        <div className="modal">
          <h3 className="modal-header">
            {props.title || '弹窗'}
            <span className="modal-header-span" onClick={props.onClose}>X</span>
          </h3>
          <div className="modal-content" style={{height: height}}>
            {/* 渲染子内容 */}
            {props.children}
          </div>
          <div className="modal-footer">
            {props.footer}
          </div>
        </div> 
      </div>
    )
  }

  render() {
    return ReactDom.createPortal(
      this.modalComponent(),
      document.body
    )
  }
}

export default Modal;
