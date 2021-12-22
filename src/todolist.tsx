import React, { useState } from "react";

function ToDoList() {

	interface todosProps {
		text: string;
		checked: boolean;
		hovered: boolean;
	}

	const [todos, setTodos] = useState<todosProps[]>([{
		text: "",
		checked: false,
		hovered: false
	}])

	const textInput: any = React.createRef()

	const addToDo = () => setTodos((oldArray: any[]) => [...oldArray, {text: textInput.current.value, checked: false}])

	function checkTodo (index: number) {
		const arr = JSON.parse(JSON.stringify(todos))
		const item = arr[index]
		item.checked = !item.checked
		setTodos(arr)
	}

	function removeTodo(index: number) {
		const arr:todosProps[] = JSON.parse(JSON.stringify(todos))
		arr.splice(index, 1)
		setTodos(arr)
	}

	function hover(index: number) {
		const arr:todosProps[] = JSON.parse(JSON.stringify(todos))
		const item = arr[index]
		arr.forEach((e) => e.hovered = false)
		item.hovered = !item.hovered
		setTodos(arr)
	}

	return (
		<div>
			<input type="text" ref={textInput} />
				<button className="submit-button" onClick={addToDo}>Submit</button>
				<div className="todos-container">{todos.map((todo: any, i: number) => 
					todo.text === "" ? null
						: <div key={i} onMouseOver={() => hover(i)} onMouseOut={() => hover(i)}
							className={todo.checked ? "todo-container checked"
						: "todo-container"}>
							<button className="button" onClick={() => checkTodo(i)}>
							{todo.checked ? "✔" : ""}
							</button>
								<div>{todo.text}</div>
							<button className={todo.hovered === true ? "remove-button hovered"
							: "remove-button"} onClick={() => removeTodo(i)}>
							</button>
							</div>
			)}</div>
			</div>
	)
}

export default ToDoList