import { useEffect, useState } from "react";

const Modal = (props) => {
	const change = () => {
		props.setActive(false)
	}
	const [inputModal, setInputModal] = useState(props.studntData[0][0])
	const [inputModal1, setInputModal1] = useState(props.studntData[0][1])
	const [inputModal2, setInputModal2] = useState(props.studntData[0][1])
	const [inputModal3, setInputModal3] = useState(props.studntData[0][3])
	const [inputModal4, setInputModal4] = useState(props.studntData[0][4])
	const [inputModal5, setInputModal5] = useState(props.studntData[0][5])
	const [inputModal6, setInputModal6] = useState(props.studntData[0][6])
	const [inputModal7, setInputModal7] = useState(props.studntData[0][7])
	const [inputModal8, setInputModal8] = useState(props.studntData[0][8])
	const [inputModal9, setInputModal9] = useState(props.studntData[0][9])
	const [inputModal10, setInputModal10] = useState(props.studntData[0][10])
	const [inputModal11, setInputModal11] = useState(props.studntData[0][11])
	const [inputModal12, setInputModal12] = useState(props.studntData[0][12])
	const [inputModal13, setInputModal13] = useState(props.studntData[0][13])
	useEffect(() => {
			setInputModal(props.studntData[0][0])
			setInputModal1(props.studntData[0][1])
			setInputModal2(props.studntData[0][2])
			setInputModal3(props.studntData[0][3])
			setInputModal4(props.studntData[0][4])
			setInputModal5(props.studntData[0][5])
			setInputModal6(props.studntData[0][6])
			setInputModal7(props.studntData[0][7])
			setInputModal8(props.studntData[0][8])
			setInputModal9(props.studntData[0][9])
			setInputModal10(props.studntData[0][10])
			setInputModal11(props.studntData[0][11])
			setInputModal12(props.studntData[0][12])
			setInputModal13(props.studntData[0][13])
	}, [props.studntData])
	return (
		<div className={props.active ? "modal modal_actived" : "modal"} onClick={() => props.setActive(false)}>
			<div className = 'modal__container' onClick={e => e.stopPropagation()}>
				<input className='input' placeholder ="Введите пароль" value={inputModal} onChange={(e) => setInputModal(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal1} onChange={(e) => setInputModal1(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal2} onChange={(e) => setInputModal2(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal3} onChange={(e) => setInputModal3(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal4} onChange={(e) => setInputModal4(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal5} onChange={(e) => setInputModal5(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal6} onChange={(e) => setInputModal6(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal7} onChange={(e) => setInputModal7(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal8} onChange={(e) => setInputModal8(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal9} onChange={(e) => setInputModal9(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal10} onChange={(e) => setInputModal10(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal11} onChange={(e) => setInputModal11(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal12} onChange={(e) => setInputModal12(e.target.value)}/>
				<input className='input' placeholder ="Введите пароль" value={inputModal13} onChange={(e) => setInputModal13(e.target.value)}/>
				<button className='button' onClick={change}>Изиенить</button>
			</div>
		</div>
	);
};

export default Modal;