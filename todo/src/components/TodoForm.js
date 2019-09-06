import React, { Component } from 'react';
import './_TodoForm.scss'

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
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            todo : '',
        })
    }

    render(){
        return(
               
            <form onSubmit = {this.handleSubmit}>
                <input
                    placeholder = " insert your todo,, "
                    value = {this.state.todo}
                    name = "input"
                    onChange = {this.handleChange}
                    className = "input"
                />
                <button 
                    className = "addBtn"
                    type = "submit" 
                >
                    Add
                </button>
            </form>
        )
    }
}

export default TodoForm;