import {configureStore} from "@reduxjs/toolkit"
import todo_reducer from "../features/todo_reducer"

export const store = configureStore({
    reducer:{todos:todo_reducer}
})