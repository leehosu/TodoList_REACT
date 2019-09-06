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
    }

    handleDelete = (id) => {
        const {init} = this.state;
        this.setState({
            init : init.filter(
                init => init.id !== id
            )
        })
        console.log(init);
    }

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

    componentDidUpdate(prevProps, prevState){
        const { init } = this.state; 
        if(prevState.init !== this.state){
            console.log(init);
        }
    }
    
    render(){
        return(
            <div className = "App">
                <div className = "App-header">
                    <TodoForm onCreate = {this.handleCreate} />
                </div>
                <hr></hr>
                <div className = "App-main">
                <TodoList 
                    data = {this.state.init} 
                    onDelete = {this.handleDelete}
                    onUpdate = {this.handleUpdate}  
                />
                </div>
            </div>
        )
    }
}

export default App;