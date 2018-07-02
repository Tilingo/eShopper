import React, { Component } from 'react';
import axios from 'axios'
import WatsonShow from './styles/WatsonShow';
import Chat from './styles/Chat';
import WatsonMessage from './styles/WatsonMessage';
import UserMessage from './styles/UserMessage';
import ChatHistory from './styles/ChatHistory';

class Watson extends Component {

    state = {
        input: {
            text: ""
        },
        watson: '',
        welcome: '',
        user: ''
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
        this.setState({user: this.state.input.text})
        axios.post('/watson', this.state).then((res) => {
            // console.log(res.data.response.output.text[0])
            // const newMessage = [...this.state.watson]
            // newMessage.push(res.data.response.output.text[0])
            // console.log(newMessage)
            this.setState({ watson: res.data.response.output.text[0] })
        })
    }

    watsonWelcome = () => {
        axios.get('/watson').then((res) => {
            // console.log(res.data.response.output.text[0])
            this.setState({ welcome: res.data.response.output.text[0] })
        })
    }
    
    clearWatson = () => {
        this.setState({ watson: '' })
        this.setState({ user: '' })
    }

    clearInput = () => {
        document.getElementById("input").value = ""
    }

    render() {



        return (
            <div>

                {this.props.show
                    ? <Chat>

                        <button onClick={this.props.showWatson}>X</button>
                        <ChatHistory>
                            <WatsonMessage>
                                <p>{this.state.welcome}</p>
                            </WatsonMessage>
                            <UserMessage>
                                <p>{this.state.user}</p>
                            </UserMessage>
                            <WatsonMessage>
                                <p>{this.state.watson}</p>
                            </WatsonMessage>
                        </ChatHistory>

                        <form onSubmit={this.watsonCall}>
                            <input id="input" onChange={this.handleChange} type="text" name="text" />
                            <button type="submit" onClick={this.clearInput}>SEND</button>
                        </form>

                    </Chat>
                    : <WatsonShow onClick={() => { this.props.showWatson(), this.clearWatson(), this.watsonWelcome() }}></WatsonShow>}
            </div>
        );
    }
}

export default Watson;