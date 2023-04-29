import React from 'react';

const AddFrom = () => {
	return (
		<div>
			<input className='input' placeholder ="Введите ФИО пользователя"/>
			<input className='input' placeholder ="Введите номер группы пользователя"/>
			<button className='button'>Добавить</button>
		</div>
	);
};

export default AddFrom;