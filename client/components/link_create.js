import React, { Component } from 'react'

class LinkCreate extends Component {
    constructor(props){
        super(props)

        this.state = { error: ''}
    }
    handleSubmit(event){
        event.preventDefault()
        console.log(this.refs.link.value)

        Meteor.call('links.insert', this.refs.link.value, (error)=>{
            if(error){
                this.setState({error: 'Please enter a valid URL'})
            } else {
                this.setState({error: ''})
                this.refs.link.value = ''
            }
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                     <div className="text-danger">
                        <h4>{this.state.error}</h4>
                    </div>
                    <input ref="link" className="form-control"/>
                </div>
               
                <button className="btn btn-primary">Shorten!</button>
            </form>
        )
    }
}

export default LinkCreate