import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Item.module.css";

class Item extends React.Component {
  render() {
    return (
      <div
        className="col-5"
        style={{ border: "2px solid blue", margin: "10px" }}
      >
        <div className={styles["image"]}></div>
        <div style={{ border: "2px solid white" }}>
          <li>{this.props.item.name}</li>
          <p>{this.props.item.ingredients}</p>
        </div>

        <input
          type="checkbox"
          checked={this.props.item.favorite}
          onChange={() => this.props.handleChangeProps(this.props.item.id)}
        ></input>
        <button onClick={() => this.props.deleteProps(this.props.item.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
