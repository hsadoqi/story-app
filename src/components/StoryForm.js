import React, { Component } from 'react'
import Word from './Word'

class StoryForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '', 
            summary: '', 
            body: '', 
            word: '', 
            definition: '', 
            pronunciation: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    changeWord = (wordObj) => {
        this.setState({
            word: wordObj.word, 
            definition: wordObj.definition, 
            pronunciation: wordObj.pronunciation
        })
    }


    render(){
        return (
            <div>
                <Word changeWord={this.changeWord}/>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label><br/>
                    <input type="text" name="title" onChange={this.handleChange}/><br/>
                    <label>Summary: </label><br/>
                    <textarea type="text" name="summary" onChange={this.handleChange}/><br/>
                    <label>Body: </label><br/>
                    <textarea type="text" name="body" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default StoryForm