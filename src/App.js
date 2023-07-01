import React from 'react';
import './App.css';
//import { Form } from 'react-bootstrap';
import TopBar from './components/TopBar';
import Header from './components/Background';
import StoreList from './components/StoreList';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <StoreList/>
    </div>
  );
}

export default App;
