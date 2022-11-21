import React from 'react';
import './ButtonAddPhoto.css'

const ButtonAddPhoto = ({children, ...props}) => {
    return (
        <button
            className='buttonAddPhoto' {...props}>
            {children}
        </button>
    );
};

export default ButtonAddPhoto;
