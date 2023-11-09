import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import * as fs from 'fs';
import { todos } from './Mock';
import TodoItem from './components/TodoItem';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { CompletedTodo } from './components/CompletedTodo';
import { PendingTodo } from './components/PendingTodos';
import { fetchTodos } from './apiService';
import { Todo, Todos } from './types';


function App() {
  const [todos,setTodos] = useState<Todos>({todos:[]});

  //unique key to rerender component
  const[key,setKey] = useState(0);
    useEffect( () => {

     const fetchTodoFromApi=async ()=>{
          try {
            
            const result = await fetchTodos('Todo');
            setTodos({todos:result});
            // console.log(result);
            
          } catch (error) {
            console.error(error);
        };}
    
        fetchTodoFromApi();
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
      <FormInput key={key} onChange={()=>(setKey((prevKey) => prevKey + 1))} />
      </Container>

      <Container>
      <Router>
        <Stack>
          <Container className='my-3'>
            <Stack direction='horizontal'  className='ps-3'>
              <Link to="/pending"><Button className='rounded-0 bg-green btn-custom-greenish'>Todo</Button></Link>



              <Link to="/completed"><Button className='rounded-0 bg-light-grey btn-custom-greyish'>Completed</Button></Link>

            </Stack>


          </Container>

          <Routes>
            <Route path="/pending" element={<PendingTodo todos={todos} onChange={()=>(setKey((prevKey) => prevKey + 1))}/>}  />
            <Route path="/completed" element={<CompletedTodo todos={todos} onChange={()=>(setKey((prevKey) => prevKey + 1))}/>} />
          </Routes>
          

        </Stack>
      </Router>
      </Container>



    </div>
  );
}

export default App;
