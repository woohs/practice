import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './page/main';

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