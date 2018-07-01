import React, { Component } from 'react';
import FormWrapp from './styles/FormWrap';
import axios from 'axios'

class Watson extends Component {

    state = {
        input: {
            text: ""
        }
    }


    handleChange = (event) => {
        const userInput = event.target.value
        const inputName = event.target.name

        const newState = { ...this.state }
        newState[inputName] = userInput

        this.setState(newState)
    }

    watsonTest = (event) => {
        event.preventDefault()
        console.log("I'm doing something")
        axios.get('/watson', this.state).then((res) => {
            console.log(res.data.response.text)
            console.log(res.data.response.output.text[0])
        })
    }

    // componentDidMount() {
    //     this.watsonTest()
    // }

    render() {
        return (
            <FormWrapp onSubmit={this.watsonTest}>
                <input onChange={this.handleChange} type="text" name="text" />
                <button type="submit">PORFIS</button>
            </FormWrapp>
        );
    }
}

export default Watson;