import React from 'react';
import {useNavigate} from 'react-router-dom'
import ButtonAddPhoto from "../UI/buttonAddPhoto/ButtonAddPhoto";
import './Photo.css'
import MyButton from "../UI/myButton/MyButton";
import Header from "../header/Header";

const Photo = ({onAddPhoto}) => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    return (
        <>
            <Header/>
            <div className='photo'>
                <div className='photo__container'>
                    <h1 className='photo__title'>Добавить фото</h1>
                    <ButtonAddPhoto
                        onClick={onAddPhoto}
                        type='button'
                    />
                </div>
                <button
                    className='button'
                    onClick={logout}
                >
                    Выйти
                </button>
            </div>
        </>
    );
};

export default Photo;