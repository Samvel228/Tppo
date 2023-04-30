import React from 'react';

const Line = (props) => {
	return (
			<tr className='line' onDoubleClick={() => props.setModalActive(true)}>
				<td>{props.info.fio}</td>
				<td>{props.info.id}</td>
				<td>{props.info.login}</td>
				<td>{props.info.group}</td>
			</tr>

	);
};

export default Line;