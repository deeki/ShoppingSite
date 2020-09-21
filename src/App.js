import React from 'react';
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
