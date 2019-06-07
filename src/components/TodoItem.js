import React, {Component} from 'react';


export default class TodoItem extends Component{
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleTodo.bind(this, id)}/>
                {title}
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }


    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '1px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
}
