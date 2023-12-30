import { createSlice , nanoid } from "@reduxjs/toolkit";
// it also provides nanoid which generates unique id

// initial value to be assigned 
const initialState = {
    todos: [
        {id:1,text:"Hello world"}
          ]
}

// syntax
export const todoSlice = createSlice({
     name:'todo',         // here name is NOT userdefined 
     initialState, // declared above
     reducers:{ // here in redux also defination of function is also compulsory
        addTodo: (state,action)=>{  // each function will get state(old initial values) and action (got new values to be stored )
            const todo = { // object creation to be stored 
                id:nanoid(), // to generate unique id's 
                text:action.payload // the data obtained from action 
            }
            state.todos.push(todo) 
        },                
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) // action.payload includes all values that is passed can be id, text, etc that is passed
        },
        updateTodo: (state,action)=>{
            state.todos  = state.todos.filter((todo)=> todo.id === action.payload.id ? action.payload : todo )
        }
     }

})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer 