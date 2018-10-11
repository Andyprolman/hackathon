import React, { Component } from 'react';

export default class Links extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>
                    <label style={{marginTop:'60px'}}>Enter two image URL'S to test comaptability</label>
                </div>
                <div>
                    <div>
                        <input name='link1' className='form-control' type='text' placeholder='Link One' onChange={this.props.changeValues} style={{marginBottom:'10px'}}/>
                    </div>
                    <div>
                        <input name='link2' className='form-control' type='text' placeholder='Link Two' onChange={this.props.changeValues}/>
                    </div>
                </div>
                <div>
                    <button className='btn btn-success' onClick={this.props.calculate} style={{marginTop:'10px'}}>Calculate</button>
                </div>
            </div>          
        )
    }
}