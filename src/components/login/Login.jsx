import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyInput from "../UI/myInput/MyInput";
import MyButton from "../UI/myButton/MyButton";
import '../register/register.css'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        navigate('/photo')
    }

    return (
        <div className='register'>
            <div className='register__container'>
            <form className='register__form' onSubmit={handleSubmit}>
                <MyInput type="text" placeholder="Ведите имя"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <button className='button'>Войти</button>
                <Link className='register__link' to='/register'>Регистрация</Link>
            </form>
        </div>
        </div>

    );
};

export default Login;