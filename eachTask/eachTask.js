import React, { Component } from 'react'
import './eachTask.css'

class EachTask extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className='task-card'>
                {this.props.task}
                <button>></button>
            </div>
                )
            }
        
        
        }
        
export default EachTask