import React, { Component } from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './_App.scss';

class App extends Component{

    id = 0
    state = {
        init: [
        {
            id : this.id++,
            todo : '카페 가기'
        },
        {
            id : this.id++,
            todo : 'REACT로 TODOLIST 만들기'
        }
        ]
    };

    handleCreate = (e) => {
        const { init } = this.state;
        this.setState({
            init : init.concat({
                id : this.id ++,
                ...e
            })
        })
        console.log(e);
    }

    handleDelete = (id) => {
        const {init} = this.state;
        this.setState({
            init : init.filter(
                init => init.id !== id
            )
        })
    }

    handleUpdate = (id,data) => {
        const {init} = this.state;
        this.setState({
            init : init.map(
                init => id === init.id 
                ? { ...init, ...data} : init
            )
        })
    }

    render(){
        // const { init } = this.state; 
        return(
            <div className = "App">
                <TodoForm onCreate = {this.handleCreate} />
                <TodoList 
                    data = {this.state.init} 
                    onDelete = {this.handleDelete}
                    onUpdate = {this.handleUpdate}
                />
            </div>
        )
    }
}

export default App;