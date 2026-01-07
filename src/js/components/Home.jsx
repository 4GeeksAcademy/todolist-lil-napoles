import { useState } from "react";

const Home = () => {

	const [toDoList, setToDoList] = useState([])
	const [input, setInput] = useState("hola")
	function handleSubmit(e) {
		e.preventDefault()


		const newTask = {

			label: input,
			is_done: false
		}
		setToDoList([...toDoList, newTask]);
		setInputValue(""); //
	}

	return (
		<div className="text-center">

			<h1 className="titulo">to do list</h1>
			<form className="form" onSubmit={handleSubmit} >
				<input type="text" value={input} onChange={(e) => { setInput(e.target.value) }
				} />
			</form>
			<div className="renderizado">


			</div>
		</div>
	);
};

export default Home;