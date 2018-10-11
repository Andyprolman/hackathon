import React, { Component } from 'react';
import Links from './Links'
import Result from './Result'

const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      link1: '',
      link2: '',
      hidePhoto: true,
    }
    
    this.changeValues = this.changeValues.bind(this);
    this.calculate = this.calculate.bind(this);
    this.output = this.output.bind(this);
  }

  changeValues(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  calculate(e){
    axios.get(`/api?link1=${this.state.link1}&link2=${this.state.link2}`)
      .then(response=> {
        console.log(response.data);

        this.setState({
          hidePhoto: false,
          percentage: response.data.percentage,
          result: response.data.result,
        })
      
        this.output();
      })
      return false
    
  }

  output(){
    console.log(`You are ${this.state.percentage}% compatible!`)
    this.setState({
      output:`You are ${this.state.percentage}% compatible!`,
    })
  }


  render() {
    return (
      <div className='container' style={{maxWidth:'100%'}}>
        <div className='row'>
          <div className='col-md-6 col-md-push-3'>
            <div>
              <h1 style={{textAlign:'center'}}>Test Your Compatability!</h1>
            </div>
            <Links
            changeValues={this.changeValues}
            calculate={this.calculate}
            link1={this.state.link1}
            link2={this.state.link2}/>
            <Result
            result={this.state.result}
            percentage={this.state.percentage}
            hidePhoto={this.state.hidePhoto}
            link1={this.state.link1}
            link2={this.state.link2}
            output={this.state.output}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
