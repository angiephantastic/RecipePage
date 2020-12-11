import React from "react";
import List from "./List";
import Header from "./Header";
import Input from "../components/Input";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Image from './ImageComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from './Navigation'

class Container extends React.Component {
  state = {
    items: [
      {
        id: uuidv4(),
        name: "Pho Bo",
        ingredients: "Beef bones, Rice noodles, Spices",
        favorite: false,
        image: "",
      },
      {
        id: uuidv4(),
        name: "Banh mi",
        ingredients: "Banh mi, pate, meat, veggies",
        favorite: false,
        image: "",
      },
      {
        id: uuidv4(),
        name: "Ga xa ot",
        ingredients: "Chicken, lemongrass, chillies, fish sauce",
        favorite: false,
        image: "",
      },
    ],
  };

  handleCheckBox = (id) => {
    //snapshot from prevState to compare then setState to update
    this.setState((prevState) => ({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.favorite = !item.favorite;
        }
        return item;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState({
      items: [
        ...this.state.items.filter((item) => {
          return item.id !== id;
        }),
      ],
    });
  };

  addRecipe = (name, ingredients) => {
    const newRecipe = {
      id: uuidv4(),
      name: name,
      ingredients: ingredients,
      favorite: false,
      image: "",
    };
    this.setState({
      items: [...this.state.items, newRecipe],
    });
  };

  render() {
    return (
      <div className="container" style={{ border: "2px solid yellow" }}>
        <Header />
        <Buttons />
        <div
          className="row justify-content-center"
          style={{ border: "2px solid black" }}
        >
          <div>
            <List
              items={this.state.items}
              handleChangeProps={this.handleCheckBox}
              deleteProps={this.deleteItem}
            />
            <Image/>
          </div>
        </div>
        <div className="row justify-content-center">
            <Input addRecipeProps={this.addRecipe} />
          </div>
      </div>
    );
  }
}

export default Container;
