import './App.css';
import React from 'react';
import RootPage from './pages/rootPage';
import { BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
   render(){
    return (
      <div>
      <Router>
        <RootPage />
      </Router>
      </div>
    );
  }
}

export default App;

