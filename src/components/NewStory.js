import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewStory extends Component {
    render(){
        return (
            <Link to={'/stories/new'}>
                <button>Click me to create a new story!</button>
            </Link>
        )
    }
}

export default NewStory