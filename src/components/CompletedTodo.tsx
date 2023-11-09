import axios from "axios";
import { todos } from "../Mock";
import TodoItem from "./TodoItem";
import{useEffect, useState} from 'react';
import { Todo, Todos } from "../types";
import { Container, Stack } from "react-bootstrap";
import {fetchTodos} from '../apiService'

export function CompletedTodo({todos,onChange}:{todos:Todos,onChange:()=>void}){
    // const[todos,setTodos] = useState<Todo[]>([]);
    // useEffect( () => {

    //  const fetchTodoFromApi=async ()=>{
    //       try {
            
    //         const result = await fetchTodos('Todo');
    //         setTodos(result);
    //         // console.log(result);
            
    //       } catch (error) {
    //         console.error(error);
    //     };}
    
    //     fetchTodoFromApi();
    //   }, []);

    //   const completedTodo = todos.filter((todo)=>{todo.IsCompleted === true})


    return(
        <Container>
          <Stack>
            
            
              {
                
              todos ? (
                todos.todos.filter((todo) => todo.IsCompleted === 1).map((todo) => (
                  <TodoItem key={todo.Id} todo={todo} onChange={onChange} isVisible={false}/>)
                  
                  )
                  )
                  :( <div>no todos</div>)
      
      
      
      
              }
            
           
      </Stack>
        </Container>
    );
}

