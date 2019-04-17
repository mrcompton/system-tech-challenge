import React, {Component} from 'react'
import './completed.css'
import EachTask from '../eachTask/eachTask';
import {connect} from 'react-redux'
import {updateLists} from '../../redux/reducer'

class completed extends Component{
    constructor(props){
        super(props)

        this.state = {
            newItem: '',
            itemsList: this.props.completeList,
            showInput: false,
            location: 'completed'
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
        console.log(this.state.newItem)
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
                <EachTask key={i} task={val} location={this.state.location} handleUpdate={this.props.handleUpdate}/>
            )
        })
        return (
            <div className='column completed'>
                <h2>Completed</h2>
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
        completeList: reduxState.completeList
    }
}
export default connect(mapStateToProps,{updateLists})(completed)