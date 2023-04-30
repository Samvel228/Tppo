import React from 'react';
import TableForm from "./TableForm.js";

const SearchForm = (props) => {
	return (
		<div className='search'>
			<div className='search__search'>
				<input className='input' placeholder ="Введите id пользователя"/>
				<input className='input' placeholder ="Введите ФИО пользователя"/>
				<input className='input' placeholder ="Введите логин пользователя"/>
				<input className='input' placeholder ="Введите номер группы пользователя"/>
			</div>
			<button className='button'>Показать</button>
			<div className='search__table'>
				<TableForm data = {props.data} setModalActive ={props.setModalActive}/>
			</div>
		</div>

	);
};

export default SearchForm;