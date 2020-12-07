import React from 'react'
import List from './List'
import Header from './Header'
import Input from '../components/Input'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Image from './ImageComponent'

class Container extends React.Component {
    state = {
        items: [
            {
                id: uuidv4(),
                name: "Pho Bo",
                ingredients: "Beef bones, Rice noodles, Spices",
                favorite: false,
                image: ""
            },
            {
                id: uuidv4(),
                name: "Banh mi",
                ingredients: "Banh mi, pate, meat, veggies",
                favorite: false,
                image: ""
            },
            {
                id: uuidv4(),
                name: "Ga xa ot",
                ingredients: "Chicken, lemongrass, chillies, fish sauce",
                favorite: false,
                image: ""
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
            id: uuidv4(),
            name: name,
            ingredients: ingredients,
            favorite: false,
            image: ""
        }
        this.setState({
            items: [...this.state.items, newRecipe]
        })
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <Input addRecipeProps={this.addRecipe}/>
                <List items={this.state.items} 
                handleChangeProps={this.handleCheckBox} 
                deleteProps={this.deleteItem}/>
                <Image/>
            </div>
        )
    }
}

export default Container