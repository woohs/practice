import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ModalDemo from '../modal-demo';
import Header from './../../components/header';
import shouldUpdate from '../shouldUpdateTest';

function Main() {
  return (
    <>
      <h2>WReact</h2>
      <p>这是一个实验性的react组件库，记录个人开发的组件</p>
    </>
  )
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <div className="App-left">
            <nav>
              <ul className="App-nav">
                <li><Link to="/">关于</Link></li>
                <li><Link to="/modal/">modal-弹窗</Link></li>
                <li><Link to="/should_update_test/">组件渲染</Link></li>
                <li><Link to="/users/">Users</Link></li>
              </ul>
            </nav>
          </div>
          <div className="App-right">
            <Route path="/" exact component={Main} />
            <Route path="/modal" exact component={ModalDemo} />
            <Route path="/users" exact component={Users} />
            <Route path="/should_update_test" exact component={shouldUpdate} />
          </div>
        </div>
        <footer className="footer">
          <p>{process.env.REACT_APP_SECRET_CODE}</p>
        </footer>
      </div>
    );
  }
}

export default App;
