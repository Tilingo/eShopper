import React, { Component } from 'react';
import FormWrapp from './styles/FormWrap';
import axios from 'axios'
import WatsonShow from './styles/WatsonShow';

class Watson extends Component {

    state = {
        input: {
            text: ""
        },
        watson: [],
        welcome: ''
    }


    handleChange = (event) => {
        const userInput = event.target.value
        const inputName = event.target.name

        const newState = { ...this.state }
        newState.input[inputName] = userInput

        this.setState(newState)
    }

    watsonCall = (event) => {
        event.preventDefault()
        axios.post('/watson', this.state).then((res) => {
            console.log(res.data.response.output.text[0])
            const newMessage = [...this.state.watson]
             newMessage.push(res.data.response.output.text[0])
            console.log(newMessage)
            this.setState({ watson: newMessage })

        })
    }

    componentDidMount() {
        axios.get('/watson').then((res) => {
            // console.log(res.data.response.output.text[0])
            this.setState({ welcome: res.data.response.output.text[0] })
        })
    }

    render() {



        return (
            <div>

                {this.props.show
                ? <div>

                    <div>
                        <button onClick={this.props.showWatson}>X</button>
                    </div>
                <FormWrapp onSubmit={this.watsonCall}>
                    <input onChange={this.handleChange} type="text" name="text" />
                    <button type="submit">PORFIS</button>
                </FormWrapp>

                </div>
                : <WatsonShow onClick={this.props.showWatson}></WatsonShow>}
            </div>
        );
    }
}

export default Watson;