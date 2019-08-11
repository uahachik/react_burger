import React from 'react';
import { Link } from "react-router-dom";

import Image from '../../layout/Image';
import PropTypes from "prop-types";

import uuid from 'uuid';

export default function  Custom(props) {
    const {custom, burgerName, burgerImage} = props; 
    return (
        <>
            <Link to={{pathname: `/custom/burger`, state: {custom, burgerImage, burgerName} }}>
                {custom.length !== 0 &&
                    <>
                        <button className="btn btn-success btn-lg mb-2">
                            To Order
                        </button><p/>
                    </>
                }
            </Link>
            {
                props.custom.map(component => {
                    return (
                        <div key={uuid()} style={{ display: 'inline-flex'}}>
                            <small><b>{component.name}</b></small>
                            <Image attribute={component} style={style} />   
                        </div>
                    );
                })
            }
        </>
    );
}

const style = {width: '50px', margin: '10px'};

Custom.propTypes = {
    custom: PropTypes.array.isRequired
};