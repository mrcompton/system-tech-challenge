import React, { Component } from 'react';
import './backlog.css';
import EachTask from '../eachTask/eachTask';


class backlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            itemsList: ['test1', 'test 2', 'test 3'],
            showInput: false
        }
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
        this.setState({
            showInput: false
        })
    }
    render() {

        let mappedTasks = this.state.itemsList.map((val, i) => {
            return( 
                <EachTask key={i} task={val}/>
            )
        })
        return (
            <div className='column backlog'>
                <h2>Backlog</h2>
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

export default backlog