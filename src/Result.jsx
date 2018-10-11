import React, { Component } from 'react';

export default class Result extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

   

    render(){
        const p = {
            display: 'inline-block'
        }
        return(
            <div className='text-center'>
                <div className='row'>
                    <div>
                        <div hidden={this.props.hidePhoto} style={p}>
                            <div className='row'>
                                <h1 className='odometer' style={{marginRight:'10px'}} hidden={this.props.hidephoto}>{this.props.percentage}</h1>
                                <h1 style={{display:'inline', fontSize:'100px', verticalAlign:'middle', marginLeft:'10px'}}>%</h1>
                            </div>
                            <h4 className='text-center'>{this.props.result}</h4> 
                        </div>
                    </div>
                </div>
                <div hidden={this.props.hidePhoto} style={{marginTop:'50px', marginBottom:'20px'}}>
                    <img src={this.props.link1} style={{width:'250px', height:'250px', margin:'5px'}}></img>
                    <img src={this.props.link2} style={{width:'250px', height:'250px', margin:'5px'}}></img>
                </div>
                
                
            </div>
        )
    }
}