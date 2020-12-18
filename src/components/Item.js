import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Item.module.css";
import ImageComponent from './ImageComponent'

class Item extends React.Component {
  render() {
    return (
      <div
        className="col-5"
        id={styles.image}
      >
        {/* <div className={styles["image"]}></div> */}
        {/* <img src={this.props.items}></img> */}
        <div>
          <ImageComponent name = {this.props.item.name}/>
        </div>
        <div className={styles.textBox}>
          <li id={styles.name}>{this.props.item.name}</li>
          <p id={styles.ingredients}>{this.props.item.ingredients}</p>
        </div>

        <input
          type="checkbox"
          checked={this.props.item.favorite}
          onChange={() => this.props.handleChangeProps(this.props.item.id)}
        ></input>
        <button onClick={() => this.props.deleteProps(this.props.item.id)} id={styles.buttons}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
