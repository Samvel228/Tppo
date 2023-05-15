import React from 'react';
import {useNavigate} from "react-router-dom";
import "../style.css"

const LoginPage = (props) => {
	const nav = useNavigate()
	
	return (
		<div className='login'>
			<div className='login__container'>
				<div className='login__header'>Вход</div>
				<input className='input' placeholder ="Введите логин"/>
				<input className='input' placeholder ="Введите пароль"/>
				<div className='login__button'>
					<button className='button login__button' onClick={() => {props.setIsLoged(true); nav("/home")}}>Войти</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;