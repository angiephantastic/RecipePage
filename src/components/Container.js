import React from 'react'
import List from './List'
import Header from './Header'
import Input from '../components/Input'

class Container extends React.Component {
    state = {
        items: [
            {
                id: 1,
                name: "Pho Bo",
                ingredients: "Beef bones, Rice noodles, Spices",
                favorite: false
            },
            {
                id: 2,
                name: "Banh mi",
                ingredients: "Banh mi, pate, meat, veggies",
                favorite: false
            },
            {
                id: 3,
                name: "Ga xa ot",
                ingredients: "Chicken, lemongrass, chillies, fish sauce",
                favorite: false
            }
        ]
    }

    handleCheckBox = (id) => {
        //snapshot from prevState to compare then setState to update
        this.setState(prevState => ({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    item.favorite = !item.favorite
                }
                return item
            })
        }))
    }

    deleteItem = id => {
        this.setState({
            items: [
                ...this.state.items.filter(item => {
                    return item.id !== id
                })
            ]
        })
    }

    addRecipe = (name,ingredients) => {
        const newRecipe = {
            id: 4,
            name: name,
            ingredients: ingredients,
            favorite: false
        }
        this.setState({
            items: [...this.state.items, newRecipe]
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Input addRecipeProps={this.addRecipe}/>
                <List items={this.state.items} 
                handleChangeProps={this.handleCheckBox} 
                deleteProps={this.deleteItem}/>
            </div>
        )
    }
}

export default Container