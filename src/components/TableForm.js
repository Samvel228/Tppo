import React from 'react';
import Line from './Line';

const TableForm = (props) => {
	return (
		<div className='table'>
			<table>
				<thead>
					<tr>
					<th>ФИО пользователя</th>
					<th>ID</th>
					<th>Логин</th>
					<th>Номер группы</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item, index) => {
						return(
						<Line info = {item} key={index} setModalActive ={props.setModalActive}/>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableForm;