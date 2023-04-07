import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = []

const todo_reducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add_todo:(state,action) => {
            
            const newTodo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.push(newTodo)
        },
        delete_todo:(state,action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export default todo_reducer.reducer
export const {add_todo, delete_todo} = todo_reducer.actions