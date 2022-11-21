import React from 'react';
import './myButton.css';

const MyButton = ({children, isSubmitBtnActive}) => {
    return (
        <button disabled={!isSubmitBtnActive} className='button'>
            {children}
        </button>
    );
};

export default MyButton;