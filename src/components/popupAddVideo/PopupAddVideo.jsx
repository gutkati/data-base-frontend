import React, {useState} from 'react';
import MyInput from "../UI/myInput/MyInput";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import MyButton from "../UI/myButton/MyButton";
import useFormValidation from "../../utils/Validation"

const PopupAddVideo = ({isOpen, onClose}) => {
    const {link, description, date, isSubmitBtnActive, handleInputs, handleFormSubmit} = useFormValidation()

    return (
        <PopupWithForm
            title="Создать видео"
            name='video'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleFormSubmit}
        >
            <div className='popup_input-container'>
                <MyInput
                    name='link'
                    value={link}
                    onChange={handleInputs}
                    placeholder="Ссылка на видео"/>
            </div>
            <div className='popup_input-container'>
                <MyInput
                    name='description'
                    value={description}
                    onChange={handleInputs}
                    placeholder="Описание"/>
            </div>
            <div className='popup_input-container'>
                <MyInput
                    name='date'
                    value={date}
                    onChange={handleInputs}
                    placeholder="Дата"/>
            </div>
            <MyButton isSubmitBtnActive={isSubmitBtnActive}>
                Сохранить
            </MyButton>

        </PopupWithForm>
    );
};

export default PopupAddVideo;