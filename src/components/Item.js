import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" 
                checked={this.props.item.favorite}
                onChange={() => this.props.handleChangeProps(this.props.item.id)}>
                </input>
                <button onClick={() => this.props.deleteProps(this.props.item.id)}>
                    Delete
                    </button>
                <li>{this.props.item.name}</li>
                <p>{this.props.item.ingredients}</p>
            </div>
        )
    }
}

// function Item(props) {
//     return (
//         <div>
//             <li>{props.item.name}</li>
//             <p>{props.item.ingredients}</p>
//         </div>
//     )
// }

export default Item