import { useState } from "react";
import { useDispatch} from "react-redux"
import { add_todo } from "../features/todo_reducer";

export default function Todo_form(){
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    
    

    function addTodo(e){
        e.preventDefault()
        dispatch(add_todo({
            text:input
        }))
        setInput("")
    }
    

    return(
        <form onSubmit={addTodo} >
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button>add</button>
        </form>
    )
}

