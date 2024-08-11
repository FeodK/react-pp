import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Products";
import Categories from "./components/Categories";
import ShowItem from "./components/ShowItem";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Кресло",
          img: "./img/item1.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "39.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "./img/item2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "tables",
          price: "39.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "./img/item3.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofas",
          price: "39.99",
        },
        {
          id: 4,
          title: "Стул",
          img: "./img/item4.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "39.99",
        },
        {
          id: 5,
          title: "Лампа",
          img: "./img/item4.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "lamps",
          price: "39.99",
        },
        {
          id: 6,
          title: "Лампа",
          img: "./img/item4.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "lamps",
          price: "39.99",
        },
      ],
      showItem: false,
      ItemInfo: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteFromOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showItem ? <ShowItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.ItemInfo} /> : null}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ ItemInfo: item });
    this.setState({ showItem: !this.state.showItem });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((order) => {
      if (order.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteFromOrder(id) {
    this.setState({
      orders: this.state.orders.filter((item) => item.id !== id),
    });
  }

  chooseCategory(category) {


    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({ currentItems: this.state.items.filter((item) => item.category === category) });
  }
}

export default App;
