import { useDispatch, useSelector } from "react-redux";
import { delete_todo } from "../features/todo_reducer";

export default function Todo_list (){
    const dispatch = useDispatch()
    const todoList = useSelector(todo => todo.todos)

    function delBtn(id){
        dispatch(delete_todo({
            id
        }))
    }
    
    return(
        <div>
            {todoList.map(todo =>{
                return(
                    <div id={todo.id} >
                        <p>{todo.text}</p>
                        <button onClick={() => delBtn(todo.id)} >delete</button>
                    </div>
                )
            })}
        </div>
    )
}