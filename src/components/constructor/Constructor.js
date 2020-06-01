import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Ingredients from './Ingredients';
import Custom from './Custom';
import Image from '../../layout/Image';
import BackButton from '../../layout/BackButton';

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      src: '',
      composition: [],
      ingredients: [],
      custom: [],
    };
    this.burgerConstructor = this.burgerConstructor.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const menu = await axios.get(
      `https://bull-burger-json-server.herokuapp.com/menu/${id}`
    );
    this.setState({
      name: menu.data.name,
      src: menu.data.src,
      composition: menu.data.composition,
      isLoading: false,
    });
    const components = await axios.get(
      'https://bull-burger-json-server.herokuapp.com/components'
    );
    menu.data.composition.forEach((item) => {
      components.data.forEach((component) => {
        if (component.name === item) {
          this.setState({
            ingredients: [...this.state.ingredients, component],
          });
        }
      });
    });
  }

  burgerConstructor(component) {
    const customComponent = () => {
      let res = [];
      this.state.ingredients.forEach((ingredient) => {
        if (ingredient.name === component && res.length < 1) {
          res.push(ingredient);
        }
      });
      return res;
    };

    const restIngredients = () => {
      let { ingredients } = this.state;
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].name === component) {
          ingredients.splice(i, 1);
          return ingredients;
        }
      }
    };

    this.setState({
      custom: [...this.state.custom, ...customComponent()],
      ingredients: restIngredients(),
    });
  }

  render() {
    const { name, src, custom } = this.state;
    return (
      <>
        <h4 className="m-4 p-2" style={{ backgroundColor: 'yellow' }}>
          Construct your Custom BULL or just Choose One
        </h4>

        <section className="my-5 mb-2">
          <BackButton />

          <div className="col-md-8 float-left bg-light border border-dark">
            <h4>Construct ME!</h4>
            <Ingredients
              ingredients={this.state.ingredients}
              ingredientsChanged={this.burgerConstructor}
            />

            <div
              className="m-3 border border-secondary p-5"
              style={{ backgroundColor: 'snow' }}
            >
              <Custom custom={custom} burgerName={name} burgerImage={src} />
            </div>
          </div>

          <div className="col-md-2 float-left d-flex-column">
            <h4 style={{ width: '200px' }}>Choose ME!</h4>
            <Link to={{ pathname: '/regular/burger', state: { name, src } }}>
              <button
                className="btn btn-success btn-lg mb-2"
                onClick={this.onChooseHandler}
                style={{ width: '200px' }}
              >
                To Order
              </button>
            </Link>

            <Image attribute={this.state} style={style} />

            <h6 style={{ width: '200px' }}>{name}</h6>
          </div>
        </section>
      </>
    );
  }
}

const style = { width: '200px', margin: '10px' };
