import React, { Component } from 'react';
import ComponentAdder from './ComponentAdder';



export function renderComponents(arr){
  let html = [];

  arr.forEach(v => {
    if(v.type === 'static'){
      html.push(<div key={`heading-${v.heading}`}>{v.heading}</div>)
    }

    else if (v.type === 'input'){
      html.push(<div key={`heading-${v.heading}`}>{v.heading}</div>);
      html.push(<input key={`inputText-${v.heading}`} type="text" />);
    }

    else if (v.type === 'radio'){
      html.push(<div key={`heading-${v.heading}`}>{v.heading}</div>);
      v.childs.forEach(v1 => {
        html.push(<input type="radio" key={`radio-${v1}`} name={v.heading} value={v1} />);
      });
    }

    else if (v.type === 'dd'){
      html.push(<div key={`heading-${v.heading}`}>{v.heading}</div>);
      html.push(<select key={`dd-${v.heading}`}>{
        v.childs.map(v1 => <option key={v1} value={v1}>{v1}</option>)
      }</select>)
    }
  });

  return html;
}






class FormGenerator extends Component {
  constructor(){
    super();
    this.state = {
      mode:'option',
      components: []
    };
  }


  addComponent = () => {
    this.setState({
      mode: 'addition'
    })
  }


  deleteComponent = (index) => {
    let { components } = this.state;
    components = components.slice();
    components = components.filter((v,i) => i !== index);
    this.setState({
      components
    });
  }

  addRealComponent = (d) => {
    let { components } = this.state;
    components = components.slice();
    components.push(d);
    this.setState({components, mode:'option'});
  }


  downloadJson = () => {
    let { components } = this.state;
    let output = JSON.stringify(components);
    this.output.value = output;
  }


  renderSmartComponents = (arr) => {
    let html = [];

    arr.forEach((v,i) => {
      if(v.type === 'static'){
        html.push(<div>
          <div key={`heading-${v.heading}`}>{v.heading}</div>
          <button onClick={() => this.deleteComponent(i)}>X</button>
        </div>)
      }

      else if (v.type === 'input'){
        html.push(<div><div key={`heading-${v.heading}`}>{v.heading}</div>
            <input key={`inputText-${v.heading}`} type="text" />
            
          </div>);
      }

      else if (v.type === 'radio'){
        html.push(<div><div key={`heading-${v.heading}`}>{v.heading}</div>
        {
          v.childs.map(v1 => {
            return <label><input type="radio" key={`radio-${v1}`} name={v.heading} value={v1} /> {v1} </label>
          })
        }
        <button onClick={() => this.deleteComponent(i)}>X</button>
          </div>);
      }

      else if (v.type === 'dd'){
        html.push(<div><div key={`heading-${v.heading}`}>{v.heading}</div>
            {
              <select key={`dd-${v.heading}`}>{
                v.childs.map(v1 => <option key={v1} value={v1}>{v1}</option>)
              }</select>
            }
            <button onClick={() => this.deleteComponent(i)}>X</button>
          </div>);
        
      }
    });

    return html;
  }


  
  
  render(){
    const { mode, components } = this.state;
    return (
      <div className="geneBox">
        <h3>Form generator</h3><br/>

        {
          components.length ? this.renderSmartComponents(components) : ''
        }

        <br/>
        {
          mode === 'addition' ?  <ComponentAdder addComponent={this.addRealComponent} /> : ''
        }
        <br/>
        <button onClick={this.addComponent}>Add Component</button><br/>
        <button onClick={this.downloadJson}>Download JSON</button><br/>

        <textarea rows="4" cols="50" ref={(c) => this.output = c}></textarea>  
      </div>
    );  
  }
  
}

export default FormGenerator;

