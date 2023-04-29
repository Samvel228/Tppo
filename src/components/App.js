import AddFrom from "./AddFrom.js";
import SearchForm  from "./SearchForm.js";
import "../style.css"

function App() {
  var sii = [{fio: "em", id: 12, login: "am", group: "21"}, 
  {fio: "sm", id: 13, login: "azm", group: "212"},
  {fio: "edm", id: 14, login: "axm", group: "211"}];

  return (
    <div className="app">
      <div className="app__containter">
        <div className="app__search">
          <SearchForm data = {sii}/>
        </div>
          <AddFrom />
      </div>
    </div>
  );
}

export default App;
