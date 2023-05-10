import AddFrom from "./AddFrom.js";
import SearchForm  from "./SearchForm.js";
import "../style.css"
import Modal from "./Modal.js";
import { useState, useEffect } from "react";

function App() {
	const [modalActive, setModalActive] = useState(false)
	const [sii, setSii] = useState([])

	useEffect(() => {
		fetch("http://localhost:80/site/proj.php", {
			method: 'GET',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
		  })
		  .then (response => response.json())
		  .then (response => {
			var arrObjects = []
			for (let i = 0; i < response.length; i++) {
				if (i === 0){
					continue
				}
				arrObjects.push({fio: response[i][0], id: response[i][2], login: response[i][3], group: response[i][1]})
			}
			setSii(arrObjects);
		  })
	}, [])



  return (
    <div className="app">
      <div className="app__containter">
        <div className="app__search">
          <SearchForm data = {sii} setModalActive = {setModalActive}/>
        </div>
          <AddFrom />
      </div>
      <Modal active = {modalActive} setActive = {setModalActive}/>
    </div>
  );
}

export default App;
