import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props.user;
        return (
            <>
                <li className="li">
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                </li>
            </>
        );
    }
}

export default PersonCard;