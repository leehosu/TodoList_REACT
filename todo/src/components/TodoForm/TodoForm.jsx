import React, { Component } from 'react';
import './TodoForm.css'

class TodoForm extends Component{
    state = {
        todo : ''
    }

    handleChange = (e) =>{        
        this.setState({
            todo : e.target.value
        })
    }

    handleSubmit = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(!this.state.todo.trim()) return;
            this.props.onCreate(this.state);
            this.setState({
                todo : '',
            })
        }
    }

    render(){
        return(
             <header className="todo-header">
                 <h1> React TodoList </h1>
                 <input
                    placeholder = " insert your todo,, "
                    value = {this.state.todo}
                    name = "todo"
                    onChange = {this.handleChange}
                    className = "new-todo"
                    onKeyPress={this.handleSubmit}
                />
             </header>
                
        )
    }
}

export default TodoForm;