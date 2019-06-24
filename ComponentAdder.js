import React, { Component } from 'react';

class ComponentAdder extends Component {
  constructor(){
    super();
    this.state = {
      type:''
    };
  }


  changeType = (e) => {
    this.setState({
      type:e.target.value
    });
  }
  addComponentLocal = (type) => {
    const { addComponent } = this.props;
    
    let fieldHeading = this[type + 'Area'].value;
    let childs = false;
    if(type === 'dd' || type === 'radio'){
      childs = this[type+'Questions'].value;
      if(childs){
        childs = childs.split('\n');
      }
    }

    let payload = {
      type,
      heading:fieldHeading,
      childs
    };
    addComponent(payload);
    
  }
  
  render(){
    const { type } = this.state;
    return (
      <div className="">
        <div>component adder</div>
        type of component:
        <select onChange={this.changeType}>
          <option>Choose a type</option>
          <option value='static'>Static Text</option>
          <option value='radio'>Radio button</option>
          <option value='input'>Input Field</option>
          <option value='dropdown'>Drop Down</option>
        </select>


        <div>
          {
            type === 'static' ? <div>
              Enter the static text <br/>
              <textarea rows="4" cols="50"  ref={(c) => this.staticArea = c}></textarea><br/>
              <button onClick={this.addComponentLocal.bind(this,'static')}>Add</button>
            </div>  : ''
          }

          {
            type === 'input' ? <div>
              Enter the heading for input <br/>
              <textarea rows="4" cols="50"  ref={(c) => this.inputArea = c}></textarea> <br/>
              <button onClick={this.addComponentLocal.bind(this,'input')}>Add</button>
            </div>  : ''
          }


          {
            type === 'radio' ? <div>
              Enter the heading for radio <br/>
              <textarea rows="4" cols="50"  ref={(c) => this.radioArea = c}></textarea><br/>
              Enter a newline separated list of strings for radio button options <br/>
              <textarea rows="4" cols="50"  ref={(c) => this.radioQuestions = c}></textarea><br/>
              <button onClick={this.addComponentLocal.bind(this,'radio')}>Add</button>
            </div>  : ''
          }

          {
            type === 'dropdown' ? <div>
              Enter the heading for drop down <br/>
              <textarea rows="4" cols="50"  ref={(c) => this.ddArea = c}></textarea> <br/>
              Enter a newline separated list of strings for dropdown options<br/>
              <textarea rows="4" cols="50"  ref={(c) => this.ddQuestions = c}></textarea> <br/>
              <button onClick={this.addComponentLocal.bind(this,'dd')}>Add</button>
            </div>  : ''
          }
        </div>
      </div>
    );  
  }
  
}

export default ComponentAdder;
