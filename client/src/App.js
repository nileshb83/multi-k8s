import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import otherPage from './otherPage';
import fib from './fib';

function App() {
  return (
    <Router>
      <div className="App">
        
        <div>
            <Route exact path="/" component={fib} />
            <Route path="/otherPage" component={otherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
