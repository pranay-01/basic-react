import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name] :e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style= {{display: 'flex'}}>
                <input style={{flex:'10', padding: '5px'}}type= "text" name="title" placeholder="ADD TASK"
                 onChange= {this.onChange} value={this.state.title}/>
                <input style={{flex:'1'}}type="submit" value= "submit" className="btn" />
            </form>
        )
    }
}

export default AddTask
