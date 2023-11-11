import { useEffect, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import { Button, Container, Stack } from 'react-bootstrap';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { CompletedTodo } from './components/CompletedTodo';
import { PendingTodo } from './components/PendingTodos';
import { fetchTodos } from './apiService';
import { Todos } from './types';


function App() {
  const [todos, setTodos] = useState<Todos>({ todos: [] });
  const [loading, setLoading] = useState(false);

  //unique key to re-render component
  const [key, setKey] = useState(0);
  useEffect(() => {

    const fetchTodoFromApi = async () => {
      try {

        //fetch todos from api
        const result = await fetchTodos('Todo');
        setTodos({ todos: result });
        console.log(result);
        setLoading(false)

      } catch (error) {
        console.error(error);
        setLoading(true)

      };
    }

    fetchTodoFromApi();
    console.log(todos.todos);

  }, [key]);

  return (
    <div className="App custom-container p-2 bg-dark-grey">
      <Container>
        <div className='text-center'>
          <h1>
            Todo App

          </h1>


        </div>
      </Container>
      <Container>
        //render form component
        <FormInput key={key} onChange={() => (setKey((prevKey) => prevKey + 1))} />
      </Container>

      <Container>
        <Router>
          <Stack>
            <Container className='my-3'>

              {
                          //display loading untill fetch

              loading ? <div>Loading...</div> : <Stack direction='horizontal' className='ps-3'>
                <Link to="/pending"><Button className='rounded-0 bg-green btn-custom-greenish'>Todo</Button></Link>



                <Link to="/completed"><Button className='rounded-0 bg-light-grey btn-custom-greyish'>Completed</Button></Link>

              </Stack>}



            </Container>

            <Routes>
              
            //render pending todos on base route
              <Route path="/" element={<PendingTodo todos={todos} onChange={() => (setKey((prevKey) => prevKey + 1))} />} />

            //render pending todos component
              <Route path="/pending" element={<PendingTodo todos={todos} onChange={() => (setKey((prevKey) => prevKey + 1))} />} />

            //render completed todos component
              <Route path="/completed" element={<CompletedTodo todos={todos} onChange={() => (setKey((prevKey) => prevKey + 1))} />} />
            </Routes>


          </Stack>
        </Router>
      </Container>



    </div>
  );
}

export default App;
