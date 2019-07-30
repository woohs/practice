import React, { Component, Suspense } from 'react';
import './styles.css';

const Modal = React.lazy( () => import('./../../components/modal'));

export default class ModalDemo extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      modalBase: false,
      modalNest: false,
      modalNest2: false,
      htmlStr: '',
    }
  }

  handleClick = () => {
    fetch('http://www.lswz.gov.cn/html/ndbg/2019-03/28/243933/files/8cc8f0c824e74e3dbc06ac3e74355def.pdf')
    .then( res => res.blob()) // 解析res值为blob
    .then( response => {
      const url = URL.createObjectURL(response);
      this.setState({
        htmlStr: url
      })
    })

    this.setState(( state ) => ({
      modal: !state.modal,
    }))
  }

  handlePrint = () => {
    const iframe = document.getElementById('iframe')
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  }

  handleClickBase = () => {
    this.setState(( state ) => ({
      modalBase: !state.modalBase
    }))
  }

  handleClickNest = () => {
    this.setState(( state ) => ({
      modalNest: !state.modalNest
    }))
  }

  handleClickNest2 = () => {
    this.setState(( state ) => ({
      modalNest2: !state.modalNest2
    }))
  }

  render() {
    const { htmlStr } = this.state;
    return (
      <div className="margin-demo">
        <h3>Modal 模态框</h3>
        <h4>1. 基本弹窗</h4>
        <button type="button" onClick={this.handleClickBase}>点击显示</button>
        <h4>2. 弹窗iframe-请求外部资源打印页面</h4>
        <button type="button" onClick={this.handleClick}>点击显示</button>
        <h4>3. 嵌套弹窗</h4>
        <button type="button" onClick={this.handleClickNest}>点击显示</button>

        <Suspense fallback={<div>Loading...</div>}>
          <Modal 
            title="iframe弹窗"
            status={this.state.modal} 
            onClose={this.handleClick} 
            footer={<button onClick={this.handlePrint} style={{float: 'right'}}>打印</button>}
          >
            <iframe src={htmlStr} title='iframe' id="iframe" />
          </Modal>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Modal 
            title="基本弹窗"
            status={this.state.modalBase} 
            onClose={this.handleClickBase} 
            footer={<button onClick={this.handleClickBase} style={{float: 'right'}}>关闭</button>}
          >
            <p>这是一个基本的弹窗</p>
          </Modal>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Modal 
            title="嵌套弹窗"
            status={this.state.modalNest} 
            onClose={this.handleClickNest} 
            footer={<button onClick={this.handleClickNest} style={{float: 'right'}}>关闭</button>}
          >
            <button onClick={this.handleClickNest2}>再来一个弹窗</button>
            <Suspense fallback={<div>Loading...</div>}>
              <Modal 
                status={this.state.modalNest2} 
                onClose={this.handleClickNest2} 
              >
                <p>modal 内容2</p>
              </Modal>
            </Suspense>
          </Modal>
        </Suspense>
      </div>
    )
  }
}
