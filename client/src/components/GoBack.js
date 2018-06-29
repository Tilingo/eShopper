import React, { Component } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GoBack extends Component {
    render() {
        return (
                <button onClick={this.props.goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                </button>
        );
    }
}

export default GoBack;