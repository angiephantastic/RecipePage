import React, { useState, useEffect } from "react";
import axios from "axios";

function GetImage(props) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  // function random(min, max) {
  //   return Math.floor(Math.random() * (max + 1 - min)) + min;
  // }

  useEffect(() => {
    let key = "b53db84b597b4291b5110ffdd6624fe8";
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${props.name}&apiKey=${key}`
      )
      .then((response) => {
        console.log(response.data);
        // let count = response.data.results.length;
        // let randomNum = random(0,count)
        // let foodPic = response.data.results[randomNum-1].image;
        let foodPic = response.data.results[1].image;
        console.log(response.data.results.length);
        setImage(foodPic);
        setError(null);
      })
      .catch((error) => {
        setImage(null);
        setError(error);
      });
  }, [props.name]);

  let renderedImage = <img></img>;
  if (image !== null) {
    renderedImage = <img src={image}></img>;
  } else if (error !== null) {
    renderedImage = <p>{error.message}</p>;
  }
  return <div>{renderedImage}</div>;
}

export default GetImage;
