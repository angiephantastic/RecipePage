import React, { Component } from 'react'

class Input extends Component {
    state = [
        {name: ""},
        {ingredients: []}
    ]

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.ingredients]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addRecipeProps(this.state.name)
        this.props.addRecipeProps(this.state.ingredients)
        this.setState({
            name: "",
            ingredients: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add name" value={this.state.name} name="name" onChange={this.onChange}></input>
                <input type="text" placeholder="Add ingredients" value={this.state.ingredients} name="ingredients" onChange={this.onChange}></input>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}

export default Input