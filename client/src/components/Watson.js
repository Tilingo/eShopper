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
        newState.input[inputName] = userInput

        this.setState(newState)
    }

    watsonTest = (event) => {
        event.preventDefault()
        axios.post('/watson', this.state).then((res) => {
            // console.log(this.state)
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