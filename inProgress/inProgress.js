import React, {Component} from 'react'
import './inProgress.css'


class inProgress extends Component{
    constructor(props){
        super(props)

        this.state = {
            newItem: '',
            itemsList: ['test1, test 2'],
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
    render(){
        return (
            <div className='column progress'>
                <h2>In Progress</h2>
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

export default inProgress