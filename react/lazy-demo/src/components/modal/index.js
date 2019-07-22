import React from 'react';
import './style.css';

const Modal = props => {

  return (
    <div style={ props.status ? { visibility: "visible" } : { visibility: "hidden"} }>
      <div className="modal-mask" onClick={props.onClose}></div>
      <div className="modal">
        <h3 className="modal-header">
          弹窗
          <span className="modal-header-span" onClick={props.onClose}>X</span>
        </h3>
        <div className="modal-content">
          {/* 渲染子内容 */}
          {props.children}
        </div>
        <div className="modal-footer">
          我是有底线的
        </div>
      </div> 
    </div>
  )
}

export default Modal;
