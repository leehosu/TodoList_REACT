import React, { Component } from 'react';
import './TodoInfo.css';

class TodoInfo extends Component{

    static defultProps = {
        todoInfo : {
            id : 0,
            todo : '입력된 값 없음'
        }
    }

    state = {
        editing : false,
        checking : false,
        todo : ''
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            todo : value
        });

    }

    handleDelete = () => {
        const { todoInfo, onDelete } = this.props;
        onDelete(todoInfo.id);
    }
    
    handleTogglEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing : !editing
        })
    }

    handleCheck = () => {
        const { checking } = this.state;
        this.setState({
            checking : !checking
        })
    }
    componentDidUpdate(prevProps, prevState){
        const { todoInfo, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                todo : todoInfo.todo
            })
        }

        if(prevState.editing && !this.state.editing){
            onUpdate(todoInfo.id, {
                todo : this.state.todo
            });
        }
    }

    render(){
        const { editing } = this.state;

        if(editing){
            return (
                <div className = "App-list">
                    <div className ="list">
                        <input
                            value = {this.state.todo}
                            name = "todo"
                            placeholder="insert your todo,, "
                            onChange={this.handleChange}
                            className = "editArea"
                        />
                    </div>
                    <button onClick = {this.handleTogglEdit}> 적용 </button>
                    <button onClick = {this.handleDelete}> 삭제 </button>
                </div>
            )
        }

        // 일반 모드
        const { todo } = this.props.todoInfo;

        return (
            <div className = "App-list">
                <label className ="list">
                    <input type ="checkbox"
                        name = "checking"
                        defaultChecked = {this.state.checking}
                        onChange = {this.handleCheck}
                     />
                    <div> {todo} </div>
                </label>
                <button onClick = {this.handleTogglEdit}> 수정 </button>
                <button onClick = {this.handleDelete}> 삭제 </button>

            </div>
        )
    }
}

export default TodoInfo;