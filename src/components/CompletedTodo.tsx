
import TodoItem from "./TodoItem";
import { Todo, Todos } from "../types";
import { Container, Stack } from "react-bootstrap";

export function CompletedTodo({ todos, onChange }: { todos: Todos, onChange: () => void }) {
  const completeTodos: Todo[] = todos.todos.filter((todo) => todo.IsCompleted === 1)



  return (
    <Container>
      <Stack>


        {

          //check available completed todos 
          //available then map items to TodoItem component
          //else render msg
          completeTodos.length !== 0 ? (
            completeTodos.map((todo) => (
              <TodoItem key={todo.Id} todo={todo} onChange={onChange} isVisible={false} />)

            )
          ) : (<Container className="pt-3"> <div className="text-greenish"><h3>No Completed Todos</h3></div></Container>)





        }


      </Stack>
    </Container>
  );
}

