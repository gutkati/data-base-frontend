import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../header/Header";
import ButtonAddPhoto from "../UI/buttonAddPhoto/ButtonAddPhoto";
import MyButton from "../UI/myButton/MyButton";
import '../photo/Photo.css';

const Movies = ({onAddMovies}) => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    return (
        <>
            <Header/>
            <div className='photo'>
                <div className='photo__container'>
                    <h1 className='photo__title'>Добавить видео</h1>
                    <ButtonAddPhoto
                        onClick={onAddMovies}
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

export default Movies;