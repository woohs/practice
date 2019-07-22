import React, { Component, Suspense } from 'react';
import './styles.css';

const Modal = React.lazy( () => import('./../../components/modal'));

const htmlContent = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>菜鸟教程(runoob.com)</title></head><body><table border="1"><tr><td><p style="color: red">这是一个段落</p><p>这是另一个段落</p></td><td>这个单元格包含一个表格:<table border="1"><tr><td>A</td><td>B</td></tr><tr><td>C</td><td>D</td></tr></table></td></tr><tr><td>这个单元格包含一个列表<ul><li>apples</li><li>bananas</li><li>pineapples</li></ul></td><td>HELLO</td></tr></table></body></html>'

export default class ModalDemo extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    }
  }

  handleClick = () => {
    this.setState(( state ) => ({
      modal: !state.modal
    }))
  }

  render() {
    return (
      <div className="margin-demo">
        <button type="button" onClick={this.handleClick}>点击显示</button>
        <Suspense fallback={<div>Loading...</div>}>
          <Modal status={this.state.modal} onClose={this.handleClick} >
            <div dangerouslySetInnerHTML={{__html: htmlContent}} />
          </Modal>
        </Suspense>
      </div>
    )
  }
}
