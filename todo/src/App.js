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
            id : this.id ++,
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

    render(){// eslint-disable-next-line
        const { init } = this.state; 
        return(
            <div className = "App">
                <TodoForm onCreate = {this.handleCreate} />
                <TodoList data = {this.state.init} />
            </div>
        )
    }
}

export default App;