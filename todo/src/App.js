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
    }

    handleDelete = (id) => {
        const {init} = this.state;
        this.setState({
            init : init.filter(
                init => init.id !== id
            )
        })
        console.log(id);
    }

<<<<<<< Updated upstream
    render(){// eslint-disable-next-line
        const { init } = this.state; 
=======
    handleUpdate = (id,data) => {
        const {init} = this.state;
        this.setState({
            init : init.map(
                init => id === init.id 
                ? { ...init, ...data} : init
            )
        })
        
        console.log(init);
    }

    render(){
>>>>>>> Stashed changes
        return(
            <div className = "App">
                <div className = "App-header">
                    <TodoForm onCreate = {this.handleCreate} />
                </div>
                <div className = "App-main">
                <TodoList 
                    data = {this.state.init} 
                    onDelete = {this.handleDelete}    
                />
                </div>
            </div>
        )
    }
}

export default App;