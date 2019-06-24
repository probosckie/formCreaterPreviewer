import React, { Component } from 'react';
import './App.css';
import FormGenerator from './FormGenerator';
import FormPreviewer from './FormPreviewer';

class  App extends Component {
  constructor(){
    super();
    this.state = {
      mode: 'create'
    };
  }
  setMode = (x) => {
    this.setState({
      mode: x
    });
  }
  render(){
    const { mode } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.setMode('create')}>Create a form</button>
        <button onClick={() => this.setMode('preview')}>Preview a form</button>

        {
          mode === 'create' ? <FormGenerator /> : ''
        }

        {
          mode === 'preview' ? <FormPreviewer /> : ''
        }

      </div>
    );  
  }
  
}

export default App;
