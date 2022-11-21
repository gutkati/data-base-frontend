import React from 'react';
import './myInput.css'

const MyInput = (props) => {
    return (
       <input className='input' {...props}/>
    );
};

export default MyInput;