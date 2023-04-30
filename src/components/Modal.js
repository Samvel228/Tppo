import React from 'react';

const Modal = (props) => {
	return (
		<div className={props.active ? "modal modal_actived" : "modal"} onClick={() => props.setActive(false)}>
			<div className = 'modal__container' onClick={e => e.stopPropagation()}>
			</div>
		</div>
	);
};

export default Modal;