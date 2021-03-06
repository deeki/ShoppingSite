import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

class App extends React.Component {
  constructor(){
      super();
      this.state ={
        products:data.products,
        size:"",
        sor:""
      }
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(state => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a,b) => 
        sort === "lowest"
        ? a.price > b.price 
          ? 1 
          : -1
        : sort === "highest"
        ? a.price < b.price 
          ? 1 
          : -1
        : a._id < b._id
        ? 1
        : -1
      )
    }));
  }

  filterProducts = (event) => {
    if(event.target.value  === "") {
       this.setState({size:event.target.value, product:data.products});
    }
    else {
      this.setState({
        size: event.target.value,
        products:data.products.filter(
            (product) => product.availableSizes.indexOf(event.target.value) >= 0
          ),
      })
    }
  }

  render() {
      return (
        <div className="grid-container">
            <header>
                <nav>
                    <a href="/">Shopping site</a>
                </nav>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count={this.state.products.length}
                          size={this.state.size}
                          sort={this.state.sort}
                          filterProducts={this.filterProducts}
                          sortProducts={this.sortProducts}
                        ></Filter>
                        <Products products={this.state.products}></Products>
                    </div>
                    <div className="sidebar">
                      Cart Item
                    </div>
                </div>
            </main>
            <footer>Footer </footer>
        </div>
    );
  }
}

export default App;
