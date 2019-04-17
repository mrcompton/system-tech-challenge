import React, {Component} from 'react'
import './toDo.css'
import EachTask from '../eachTask/eachTask';
import {connect} from 'react-redux'
import {updateLists} from '../../redux/reducer'

class toDo extends Component{
    constructor(props){
        super(props)

        this.state = {
            newItem: '',
            itemsList: this.props.todoList,
            showInput: false,
            location: 'todo'
        }
    }

    componentDidUpdate(){
        console.log('todo', this.state.itemsList)
    }

    handleToggle = () => {
        this.setState({
            showInput: true
        })
    }
    handleInput = (val) => {
        this.setState({
            newItem: val
        })
        // console.log(this.state.newItem)
    }

    handleSave = () => {
        let arr = this.state.itemsList
        arr.push(this.state.newItem)
        this.setState({
            itemsList: arr,
            showInput: false
        })
    }

    render() {

        let mappedTasks = this.state.itemsList.map((val, i) => {
            return( 
                <EachTask key={i} task={val} location={this.state.location} />
            )
        })
        return (
            <div className='column todo'>
                <h2>To Do</h2>
                {mappedTasks}
                {!this.state.showInput
                    ? <button onClick={this.handleToggle}>Add Item</button>
                    : <div className='save'>
                        <input onChange={(e) => {this.handleInput(e.target.value)}} placeholder='Enter new item'></input>
                        <button onClick={this.handleSave}>Save</button>
                    </div>
                }
            </div>
        )
    }
   
}

const mapStateToProps = reduxState => {
    return {
        todoList: reduxState.todoList
    }
}
export default connect(mapStateToProps,{updateLists})(toDo)