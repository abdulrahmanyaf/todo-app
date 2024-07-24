import TodoItem from "./TodoItem"
import { useState } from "react"
export default function Todo(){
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo('')
    }

    return(
        <div>
            <form>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button onClick={(e) => handleSubmit(e)}>Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => <TodoItem key={index} item={todo}/>) }
            </ul>
        </div>
    )
}