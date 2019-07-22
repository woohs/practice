import React, { Suspense } from 'react';
import {  BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import About from '../about';
import Header from './../../components/header';
// import Modal from './components/modal';
const Modal = React.lazy( () => import('./../../components/modal'));
const htmlContent = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>菜鸟教程(runoob.com)</title></head><body><table border="1"><tr><td><p style="color: red">这是一个段落</p><p>这是另一个段落</p></td><td>这个单元格包含一个表格:<table border="1"><tr><td>A</td><td>B</td></tr><tr><td>C</td><td>D</td></tr></table></td></tr><tr><td>这个单元格包含一个列表<ul><li>apples</li><li>bananas</li><li>pineapples</li></ul></td><td>HELLO</td></tr></table></body></html>'


function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    }
  }

  handleClick = () => {
    console.log('state', this.state)
    this.setState(( state ) => ({
      modal: !state.modal
    }))
  }

  render() {

    return (
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/users/">Users</Link></li>
          </ul>
        </nav>
        <button type="button" onClick={this.handleClick}>点击显示</button>
        <Suspense fallback={<div>Loading...</div>}>
          <Modal status={this.state.modal} onClose={this.handleClick} >
            <div dangerouslySetInnerHTML={{__html: htmlContent}} />
          </Modal>
        </Suspense>
        <div>
  
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
        </div>
        <footer className="footer">
          <p>{process.env.REACT_APP_SECRET_CODE}</p>
        </footer>
      </div>
    );
  }
}

export default App;
