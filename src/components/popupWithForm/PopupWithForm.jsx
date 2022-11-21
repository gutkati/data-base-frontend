import React, {useState} from 'react';
import MyButton from "../UI/myButton/MyButton";
import './popupWithForm.css'

const PopupWithForm = (props) => {


    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__modal'>
                <button
                    type='button'
                    aria-label='закрыть'
                    className="popup__close"
                    onClick={props.onClose}
                />
                <form className={`popup__form popup__form_type_card`}>
                    <h2 className='popup__title'>{props.title}</h2>
                    {props.children}
                </form>
            </div>
            
        </div>
    );
};

export default PopupWithForm;