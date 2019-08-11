import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Image from '../../layout/Image';

function Burger(props) {
    const {id, name} = props.menu;
    return (
        <div className="d-inline-flex m-4">
            <Link to={`/constructor/${id}`}>
                <button>
                    <div>{name}</div>
                    <Image attribute={props.menu} style={style} />   
                </button>
            </Link>
        </div>
    );
}

const style = {width: '150px'};

Burger.propTypes = {
    menu: PropTypes.object.isRequired
};

export default Burger;