import React, {Component}    from 'react';

import TodoItem from './TodoItem'


export default class Todos extends Component{
    render() {
        return this.props.todos.map(
            (todo) => (
                <div>
                    <TodoItem key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo} delTodo={this.props.delTodo}/>
                </div>
            )
        );
    }
}
