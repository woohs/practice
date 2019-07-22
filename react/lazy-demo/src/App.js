import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './page/main';
import About from './page/about';

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" component={Main} />

      </div>
    </Router>
  )
}

export default AppRouter;