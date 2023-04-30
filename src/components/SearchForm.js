import React, { useState } from 'react';
import TableForm from "./TableForm.js";

const SearchForm = (props) => {
	const [filterData, setFilterData] = useState(props.data)
	const [searchId, setSearchId] = useState("")
	const [searchFio, setSearchFio] = useState("")
	const [searchLogin, setSearchLogin] = useState("")
	const [searchGroup, setSearchGroup] = useState("")
	
	const filter = () => {
		setFilterData(props.data.filter((item) => {return ((searchId === "" ? true : (String(item.id) === searchId))
															&& (searchFio === "" ? true : (String(item.fio) === searchFio))
															&& (searchLogin === "" ? true : (String(item.login) === searchLogin))
															&& (searchGroup === "" ? true : (String(item.group) === searchGroup)))
		}))
		console.log("asd", searchFio)
	}

	return (
		<div className='search'>
			<div className='search__search'>
				<input className='input' placeholder ="Введите id пользователя" onChange={(e) =>setSearchId(e.target.value)}/>
				<input className='input' placeholder ="Введите ФИО пользователя" onChange={(e) =>setSearchFio(e.target.value)}/>
				<input className='input' placeholder ="Введите логин пользователя" onChange={(e) =>setSearchLogin(e.target.value)}/>
				<input className='input' placeholder ="Введите номер группы пользователя" onChange={(e) =>setSearchGroup(e.target.value)}/>
			</div>
			<button className='button' onClick={filter}>Показать</button>
			<div className='search__table'>
				<TableForm data = {filterData} setModalActive ={props.setModalActive}/>
			</div>
		</div>

	);
};

export default SearchForm;