import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "chairs",
          name: "Кресла",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "sofas",
          name: "Диваны",
        },
        {
          key: "lamps",
          name: "Лампы",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map(({ key, name }) => (
          <div
            key={key}
            onClick={() => this.props.chooseCategory(key)}
            className="categories__item"
          >
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
