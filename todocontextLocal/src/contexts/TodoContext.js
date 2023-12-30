import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})


// custom hook  so that do not need to use useContext 
export const useTodo = ()=>{
    return useContext(TodoContext)
}

// context provider 
export const TodoProvider  = TodoContext.Provider

