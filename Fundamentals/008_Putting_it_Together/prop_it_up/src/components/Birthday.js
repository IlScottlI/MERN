import React, { Component } from 'react';

class BirthdayButton extends Component {

    render() {
        const { firstName, lastName, id } = this.props.user;
        return (
            <>
                <button onClick={this.props.increaseAge} id={id}> Birthday Button for {firstName} {lastName}</button>
            </>
        );
    }
}

export default BirthdayButton;