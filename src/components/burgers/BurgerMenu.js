import React, { Component } from 'react';
import Burger from './Burger';

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      menu: []
    };
  }

  componentDidMount() {
    fetch('/menu')
      .then(response => response.json())
      .then(data =>
        this.setState({
          menu: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    return (
      <div className="m-4">
        <h1>BULL BURGER MENU</h1>

        {this.state.menu.map(item => (
          <Burger key={item.id} menu={item} />
        ))}

        <h2 style={{ color: 'green' }} className="mt-4">
          Choose your favorite BULL
          <br />
          Go to your own constructor and create your tasty food!
        </h2>
      </div>
    );
  }
}
