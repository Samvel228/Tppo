import React from 'react';

const TableForm = (props) => {
	console.log(props.data)
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
					{props.data.map(item => {
						return(
						<tr>
							<td>{item.fio}</td>
							<td>{item.id}</td>
							<td>{item.login}</td>
							<td>{item.group}</td>
						</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableForm;