import React from 'react';
import {useNavigate} from "react-router-dom";
import "../style.css"

const LoginPage = (props) => {
	const nav = useNavigate()
	
	return (
		<div>
			<input className='input' placeholder ="Введите login"/>
			<input className='input' placeholder ="Введите пароль"/>
			<button className='button' onClick={() => {props.setIsLoged(true); nav("/home")}}>Войти</button>
		</div>
	);
};

export default LoginPage;