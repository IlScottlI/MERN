import React, { Component } from "react";
import BirthdayButton from "./Birthday";
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    increaseAge = (item) => {
        console.log('Good')
        let localUsers = JSON.parse(localStorage.getItem('users'));
        localUsers.map((e) => {
            if (e.id == item.target.id) {
                e.age = parseInt(e.age) + 1;
                this.setState({ user: e });
            } else {
                e.age = parseInt(e.age);
            }
            return e
        })
        localStorage.setItem('users', JSON.stringify(localUsers))
    }
    echo = (e) => {
        console.log(e);
    }
    render() {
        const { firstName, lastName, hairColor, age, id } = this.state.user;
        return (
            <>
                <li className="li" key={id}>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {age}</p>
                    <p onClick={this.echo}>Hair Color: {hairColor}</p>
                    <BirthdayButton user={this.state.user} increaseAge={this.increaseAge} />
                </li>
            </>
        );
    }
}

export default PersonCard;