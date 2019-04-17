import React, { Component } from 'react';
import './backlog.css';
import EachTask from '../eachTask/eachTask';
import {connect} from 'react-redux'
import {updateLists} from '../../redux/reducer'


class Backlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            itemsList: this.props.backList,
            showInput: false,
            location: 'backlog'
        }
    }

    componentDidUpdate(){
        console.log('back', this.state.itemsList)
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
        // let arr = this.state.itemsList
        // arr.push(this.state.newItem)
        this.setState({
            // itemsList: arr,
            showInput: false
        })

    }

    render() {

        let mappedTasks = this.props.backList.map((val, i) => {
            return( 
                <EachTask key={i} task={val} location={this.state.location} handleUpdate = {()=>this.props.handleUpdate()}/>
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

const mapStateToProps = reduxState => {
    return {
        backList: reduxState.backList
    }
}
export default connect(mapStateToProps, {updateLists})(Backlog)