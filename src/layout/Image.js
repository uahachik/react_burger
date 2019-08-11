import React from 'react';

export default function Image(props) {
    const {name, src} =  props.attribute;
    return (
        <img
            src={src}
            alt={name}
            style={props.style}
        />   
    )
}
