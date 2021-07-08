import React, { Component } from 'react'
import Story from '../components/Story'
import NewStory from '../components/NewStory'

class Stories extends Component {
    constructor(){
        super()
        this.state = {
            stories: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/stories`)
        .then(res => res.json())
        .then(stories => this.setState({ stories }))
    }

    render(){
        const stories = this.state.stories.map(story => <Story story={story}/>)

        return (
            <div>
                {stories}
                <NewStory/>
            </div>
        )
    }
}

export default Stories