import React, { useState } from "react";

const Home = () => {
const [lista, setLista] = useState([])
const norefresh =(evento) => {evento.preventDefault();
console.log(evento.target[0].value)
setLista([...lista,evento.target[0].value])
}
const DeleteItems = (indexItem) => {
    setLista((prevState) =>
      prevState.filter((elemento, indice) => indice !== indexItem)
    );
  };

	return (
		<div  className="container">
			<form type="submit" onSubmit={norefresh}>
			<h1 className="Titulo">Lista de pendientes</h1>
			<input type="text"></input>
			</form>
			<ul>
				{lista.map((elemento, indice)=>{
					return <li key={indice}>{elemento} <button className="btn" onClick={() => DeleteItems(indice)}>
					<i className="fas fa-trash-alt" />
				  </button></li>
				})}
			</ul>
		</div>

	);
};
export default Home;