import React from 'react';

import Image from '../../layout/Image';
import OrderButton from '../../layout/OrderButton';      
import BackButton from '../../layout/BackButton';

export default function RandomFinish(props) {
    const {state} = props.location;
    return (
        <>
            <h4 className="bg-warning m-4 p-2">Your Delicious {state.name}</h4>

            <BackButton />

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Image attribute={state} style={style} />
            </div>

            <OrderButton />
        </>
    )
}

const style = {width: '300px', marginBottom: '40px', marginRight: '200px'};
