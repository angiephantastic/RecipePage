import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Item.module.css";
import ImageComponent from "./ImageComponent";

class Item extends React.Component {
  render() {
    return (
      <div className="col-5">
        {/* <div className={styles["image"]}></div> */}
        <div className={styles.image}>
          <img src={this.props.items}></img>
          <ImageComponent name={this.props.item.name} />
          <div className={styles.textBox}>
            <li className={styles.name}>{this.props.item.name}</li>
            <p className={styles.ingredients}>
              Ingredients: {this.props.item.ingredients}
            </p>
          </div>
        </div>
        <div>
          Mark as Favorite
          <input
            type="checkbox"
            checked={this.props.item.favorite}
            onChange={() => this.props.handleChangeProps(this.props.item.id)}
          ></input>
        </div>
        <button
          onClick={() => this.props.deleteProps(this.props.item.id)}
          className={styles.buttons}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
