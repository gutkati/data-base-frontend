import React, {useState} from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import MyInput from "../UI/myInput/MyInput";
import MyButton from "../UI/myButton/MyButton";
import useFormValidation from "../../utils/Validation";

const PopupAddPhoto = ({isOpen, onClose}) => {
    const {link, description, date, isSubmitBtnActive, handleInputs, handleFormSubmit} = useFormValidation()

    return (
        <PopupWithForm
            title="Создать фото"
            name='card'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleFormSubmit}
        >
            <div className='popup_input-container'>
                <MyInput
                    name='link'
                    value={link}
                    placeholder="Ссылка на кртинку"
                    onChange={handleInputs}
                />

            </div>
            <div className='popup_input-container'>
                <MyInput
                    name='description'
                    value={description}
                    placeholder="Описание"
                    onChange={handleInputs}
                />
            </div>
            <div className='popup_input-container'>
                <MyInput
                    name='date'
                    value={date}
                    placeholder="Дата"
                    onChange={handleInputs}
                />
            </div>

            <MyButton isSubmitBtnActive={isSubmitBtnActive}>
                Сохранить
            </MyButton>

        </PopupWithForm>
    );
};

export default PopupAddPhoto;