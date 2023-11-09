import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import { Todo, Todos } from "../types";
import { Container, Stack } from "react-bootstrap";
import { fetchTodos } from "../apiService";







export const PendingTodo: React.FC<{todos:Todos,onChange:()=>void}> = ({todos,onChange}) => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // useEffect(() => {
  //   const fetchTodoFromApi = async () => {
  //     try {
  //       //used http instead of https
  //       const result = await fetchTodos('Todo');
  //       setTodos(result);
  //       // console.log(todos);
        
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTodoFromApi();
  // }, []);
  // const pendingTodo = todos.filter((todo)=>{todo.IsCompleted === false})

  return (
    <Container>
      <Stack>

      {
                
                todos ? (
                  todos.todos.filter((todo) => todo.IsCompleted === 0).map((todo) => (
                    <TodoItem key={todo.Id} todo={todo} onChange={onChange} isVisible={true} />)
                    
                    )
                    )
                    :( <div>no todos</div>)
        
        
        
        
                }
      </Stack>
    </Container>);
}

