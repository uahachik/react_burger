import React from 'react';

import Image from '../../layout/Image';
import OrderButton from '../../layout/OrderButton';
import BackButton from '../../layout/BackButton';

import uuid from 'uuid';

export default function CustomFinish(props) {
    const {custom, burgerName, burgerImage} = props.location.state;
    return (
        <>
            <h4 className="bg-warning m-4 p-2">Your Custom {burgerName}</h4>

            <section className="my-5 mb-2">
                <BackButton /> 

                <div  className="col-md-8 float-left m-auto">
                    {
                        custom.map(item => {
                            return (
                                <div key={uuid()} className="m-3 d-inline-flex">
                                    <small><b>{item.name}</b></small>
                                    <Image attribute={item} style={style} />   
                                </div>
                            );
                        })
                    }
                </div>

                <div
                    className="col-md-2 float-right mr-4 bg-warning"
                    style={{width: '140px', height: '120px'}}
                >
                        <img
                            src={burgerImage}
                            alt={burgerName}
                            style={burgerStyle}
                        />
                </div>
            </section>

            <OrderButton />
        </>
    )
}

const style = {width: '100px'};
const burgerStyle = {
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 'calc(50% - 50px)',
    left: '0',
    right: '0',
    margin: 'auto'
};
