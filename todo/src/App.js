import React, { Component } from 'react';
import TodoForm from './components/TodoForm.js';
import './_App.scss';

class App extends Component{

    handleCreate = (e) => {
        console.log(e);
    }

    render(){
        return(
            <div className = "App">
                <TodoForm onCreate = {this.handleCreate} />
            </div>
        )
    }
}

export default App;