import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoInfo from './components/TodoInfo'
import './App.css';
import TodoFooter from './components/TodoFooter';
import logo from './logo.png';

class App extends Component{

    id = 0
    state = {
        init: [
            {
                id : this.id++,
                todo : '영화보기'
            },

            {
                id : this.id++,
                todo : 'js공부하기'
            },

            {
                id : this.id++,
                todo : 'ts공부하기'
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
    }

    render(){
        return(
            <div className = "App">
                <div className="logo">
                    <img src={logo} className="react-logo"/>
                </div>
                <section className="todoapp">
                <TodoForm onCreate = {this.handleCreate} />
                <TodoInfo
                    data = {this.state.init} 
                    onDelete = {this.handleDelete}
                    onUpdate = {this.handleUpdate}
                />
                <TodoFooter />
                </section>
            </div>
        )
    }
}

export default App;