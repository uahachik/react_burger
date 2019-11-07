import React, { Component } from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid';

import Image from '../../layout/Image';

export default class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(name) {
        const item = name;
        this.props.ingredientsChanged(item);
    }

    render() {
        return (
            <>
                {
                    this.props.ingredients.map(ingredient => {
                        const {name} =  ingredient;
                        return (
                            <button
                                key={uuid()}
                                className="btn btn-outline-success"
                                style={{ display: 'inline-flex', margin: '10px' }}
                                onClick={() => this.onClickHandler(name)}
                            >
                                <small><b>{name}</b></small>
                                <Image attribute={ingredient} style={style} />
                            </button>
                        );
                    })
                }
            </>
        );
    }
}

const style = {width: '50px'};

Ingredient.propTypes = {
    ingredients: PropTypes.array.isRequired
};
