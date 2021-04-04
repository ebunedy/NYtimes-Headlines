//import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './components/Navbar';
import HeadlinesContainer from './components/HeadlinesContainer';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeadlinesContainer />
    </React.Fragment>
  );
};

export default App;
