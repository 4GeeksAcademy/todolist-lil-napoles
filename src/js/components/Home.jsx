import { useState } from "react"

const Home = () => {

	const [input, setInput] = useState("")
	const [box, setBox] = useState([])

	const ejecutar = (e) => {

		e.preventDefault()

		let nuevaTarea = {
			label: input,
			is_done: false
		}

		setBox([...box, nuevaTarea])
		setInput("")

	}

	const borrar = (i) => {

		const nuevoArray = box.filter((_, index) => index !== i);
        setBox(nuevoArray)
	}


	return (
		<div className="">
			<h1>

				todos
			</h1>
			<form onSubmit={ejecutar}>
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			</form>
			<div>
				<ul>
					{box.map((tarea, index) => {

						return (
							<li key={index}>
								{tarea.label}
								<span onClick={()=>borrar (index)} >X</span>
							</li>
						)
					})}
				</ul>
			</div>
		</div>

	)


}

export default Home
