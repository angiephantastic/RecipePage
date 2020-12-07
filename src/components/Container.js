import React, { useEffect, useState } from 'react'
import List from './List'
import Header from './Header'
import Input from '../components/Input'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import axios from 'axios'

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

    getImage = () => {
        const [image, setImage] = useState()
        const [error, setError] = useState()

        useEffect(() => {
            let name = [this.state.items.name]
            let key = "b53db84b597b4291b5110ffdd6624fe8"
            axios.get(`https://api.spoonacular.com/food/products/search?query=${name}&apiKey=${key}`).then((response) => {
                console.log(response.data)
                setImage(response.data)
                setError(null)
            })
            .catch((error) => {
                setImage(null)
                setError(error)
            })
        }, [])
    }

    render() {
        return (
            <div className="container">
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