import React from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

class List extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
          {this.props.items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleChangeProps={this.props.handleChangeProps}
              deleteProps={this.props.deleteProps}
            />
          ))}
      </div>
    );
  }
}

export default List;
