import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
           return {
               background: "#f4f4f4",
               borderBottom: "1px #ccc dotted",
               padding: '10px', 
               textDecoration: this.props.todo.completed ? "line-through": "none"
           }
        }
    
    render() {
        const { id, title } = this.props.todo
        return (
            <div style = {this.getStyle()}>
                <p>
                <input type="checkbox" onChange= {this.props.markComplete.bind
                (this, id)}/> {' '}
                { title }
                <button style={btnStyle} onClick= {this.props.delet.bind(this, id)}>*</button>
                </p>
            </div>
        )   
    }
}
const btnStyle = {
    background: "#282c34",
    color: "azure",
    border : "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
