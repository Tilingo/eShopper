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
            text: ''
        },
        watson: [],
        user: [],
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

        const userMessage = [...this.state.user, this.state.input.text]
        this.setState({ user: userMessage })

        axios.post('/watson', this.state).then((res) => {

            const newMessage = [...this.state.watson, res.data.response.output.text[0]]
            this.setState({ watson: newMessage })
        })
    }

    watsonWelcome = () => {
        axios.get('/watson').then((res) => {
            this.setState({ welcome: res.data.response.output.text[0] })
        })
    }

    clearWatson = () => {
        this.setState({ watson: [] })
        this.setState({ user: [] })
    }

    clearInput = () => {
        document.getElementById("input").value = ""
    }

    componentDidUpdate() {
        if (this.props.show) {
            this.el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    setupWatson = () => {
        this.props.showWatson()
        this.clearWatson()
        this.watsonWelcome()
    }

    render() {

        return (
            <div>

                {this.props.show
                    ? <Chat>

                        <button onClick={this.props.showWatson}>X</button>
                        <ChatHistory id="chat">
                            <WatsonMessage>
                                <p>{this.state.welcome}</p>
                            </WatsonMessage>
                            {this.state.user.map((question, i) => {
                                return (
                                    <div>
                                        <UserMessage>
                                            <p>{question}</p>
                                        </UserMessage>
                                        <WatsonMessage>
                                            <p>{this.state.watson[i]}</p>
                                        </WatsonMessage>
                                    </div>
                                )
                            })}
                            <div ref={el => { this.el = el; }} />
                        </ChatHistory>

                        <form onSubmit={this.watsonCall} autoComplete="off">
                            <input id="input" onChange={this.handleChange} type="text" name="text" />
                            <button type="submit" onClick={this.clearInput}>SEND</button>
                        </form>

                    </Chat>
                    : <WatsonShow onClick={this.setupWatson} />}
            </div>
        );
    }
}

export default Watson;