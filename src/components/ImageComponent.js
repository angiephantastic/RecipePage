import React, { useState, useEffect } from "react";
import axios from 'axios'

function GetImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let name = "pho";
    let key = "b53db84b597b4291b5110ffdd6624fe8";
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${key}`
      )
      .then((response) => {
        console.log(response.data);
        let foodPic = response.data.results[1].image
        setImage(foodPic)
        setError(null);
      })
      .catch((error) => {
        setImage(null);
        setError(error);
      });
  }, []);

  let renderedImage = <img></img>
  if (image !== null) {
  renderedImage = <img src={image}></img>;
  } else if (error !== null) {
    renderedImage = <p>{error.message}</p>;
  }
  return <div>{renderedImage}</div>;
}

export default GetImage;
