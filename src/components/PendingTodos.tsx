import React from "react";
import TodoItem from "./TodoItem";
import { Todo, Todos } from "../types";
import { Container, Stack } from "react-bootstrap";







export const PendingTodo: React.FC<{todos:Todos,onChange:()=>void}> = ({todos,onChange}) => {
  //takes list of todos , onchange callback to trigger app component render
  
  //filter pending todos
  const pendingTodos:Todo[] = todos.todos.filter((todo) => todo.IsCompleted === 0)

  return (
    <Container>
      <Stack>

      {
                //check available pending todos 
                //available then map items to TodoItem component
                //else render msg
                pendingTodos.length!==0 ? (
                  pendingTodos.map((todo) => (
                    <TodoItem key={todo.Id} todo={todo} onChange={onChange} isVisible={true} />)
                    
                    )
                    )
                    :(<Container className="pt-3"> <div className="text-greenish"><h3>Create Todo</h3></div></Container>)
        
        
        
        
                }
      </Stack>
    </Container>);
}

