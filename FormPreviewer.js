import React, { Component } from 'react';

import { renderComponents } from './FormGenerator';

class FormPreviewer extends Component {
  constructor(){
    super();
    this.state = {
      components:[]
    };
  }


  generatePreview = () => {
    let areaContent = this.c.value;
    let x = JSON.parse(areaContent);
    this.setState({
      components:x
    })
  }
  
  render(){ 
    const { components } = this.state;
    return (
      <div className="">
        enter the json in the textarea to generate preview <br/>
        <textarea rows="4" cols="50"  ref={(c) => this.c = c}></textarea><br/>

        <br/> <br/>
        {
          components.length ? renderComponents(components) : ''
        }

        <br/>

        <button onClick={this.generatePreview}>Generate Preview</button>
      </div>
    );  
  }
  
}

export default FormPreviewer;
