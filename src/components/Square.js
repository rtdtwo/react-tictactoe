import React from 'react';
import xImage from '../assets/x.svg'
import oImage from '../assets/o.svg'
import transparentPixel from '../assets/transparentPixel.png'

const square = (props) => {

    return (
        <img
            className='square'
            onClick={props.clicked}
            alt=""
            src={getImage(props.display)} />
    )
};

function getImage(display) {
    switch(display) {
        case 'X':
            return xImage;
        case 'O':
            return oImage;
        default:
            return transparentPixel;
    }
}

export default square;