import React, { Component } from 'react'

class Word extends Component {

    constructor(){
        super()
        this.state = {
            word: '', 
            definition: '', 
            pronunciation: ''
        }
    }

    componentDidMount(){
        this.fetchWord()
    }


    fetchWord = () => {
        fetch(`https://random-words-api.vercel.app/word`)
        .then(res => res.json())
        .then(data => {
            const wordObject = data[0]
            this.setState({
                word: wordObject.word, 
                definition: wordObject.definition, 
                pronunciation: wordObject.pronunciation
            })
            this.props.changeWord(wordObject)
        })
    }


    render(){
        return (
            <div>
                <h1>Your word is: {this.state.word}</h1>
                <h3>Definition: {this.state.definition}</h3>
                <h3>Pronunciation: {this.state.pronunciation}</h3>
                <button onClick={this.fetchWord}>Try a different word!</button>
            </div>
        )
    }
}

export default Word