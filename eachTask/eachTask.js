import React, { Component } from 'react'
import './eachTask.css'
import {connect} from 'react-redux'
import {updateLists} from '../../redux/reducer'

class EachTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: this.props.location,
            sendTo: ''
        }
    }

    handleClick = () => {

    }
    handleBacklogRight = () => {
        let task = this.props.task
        let backList = this.props.backList.filter(val => val !== task)
        let todoList = this.props.todoList
        todoList.push(task)
        this.props.updateLists({backList, todoList})
        
    }
    render() {
        console.log("final 1", this.props.backList, "final 2", this.props.todoList)
        return (
            <div className='task-card'>
                {
                    this.state.location === 'backlog'
                        ? <div>
                            <span>{this.props.task}</span>
                            <button className='btn' onClick={this.handleBacklogRight}><i className="fas fa-arrow-right"></i></button>
                            
                        </div>
                        : null
                }
                {
                    this.state.location === 'todo'
                        ? <div>
                            <span>{this.props.task}</span>
                            <div className='btn'>
                                <button onClick={this.handleClick(this.state.todoList, this.state.backList, 'todoList', 'backList')}><i className="fas fa-arrow-left"></i></button>
                                <button onClick={this.handleClick(this.state.todoList, this.state.progressList, 'backList', 'progressList')}><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                        : null
                }
                {
                    this.state.location === 'progress'
                        ? <div>
                            <span>{this.props.task}</span>
                            <div className='btn'>
                            <button onClick={this.handleClick(this.state.progressList, this.state.todoList, 'progressList', 'todoList')}><i className="fas fa-arrow-left"></i></button>
                            <button onClick={this.handleClick(this.state.progressList, this.state.completeList, 'progressList', 'completeList')}><i className="fas fa-arrow-right"></i></button>
                            </div>
                
                        </div>
                        : null
                }
                {
                    this.state.location === 'completed'
                        ? <div>
                            <span>{this.props.task}</span>
                            <button className='btn' onClick={this.handleClick(this.state.completeList, this.state.progressList, 'completeList', 'progressList')}><i className="fas fa-arrow-left"></i></button>
                        </div>
                        : null
                }


            </div>
        )
    }


}
const mapStateToProps = reduxState => {
    return {
        backList: reduxState.backList,
        todoList: reduxState.todoList,
        progressList: reduxState.progressList,
        completeList: reduxState.completeList
    }
}
export default connect(mapStateToProps,{updateLists})(EachTask)