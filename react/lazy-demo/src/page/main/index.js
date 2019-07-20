import React, { Suspense } from 'react';
import './App.css';
import Header from './../../components/header';
// import Modal from './components/modal';
const Modal = React.lazy( () => import('./../../components/modal'));

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
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <button type="button" onClick={this.handleClick}>点击显示</button>
        </header>
        {/* <Modal status={this.state.modal} handleClick={this.handleClick} /> */}
        {this.state.modal && <Suspense fallback={<div>Loading...</div>}>
          <Modal status={this.state.modal} handleClick={this.handleClick} />
        </Suspense>}
        <p>{process.env.REACT_APP_SECRET_CODE}</p>
      </div>
    );
  }
}

export default App;
