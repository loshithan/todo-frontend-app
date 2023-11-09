import React from 'react'
import { Todo } from '../types';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import axios from 'axios';
import { deleteTodo, putTodo } from '../apiService';
import { FaCheck, FaTrash } from 'react-icons/fa'; // Import the delete icon from Font Awesome



function TodoItem({ todo, onChange,isVisible }: { todo: Todo; onChange: () => void ;isVisible:boolean}) {

    const handleComplete = async () => {
        try {
            //submit post request
            // const response = await axios.put('http://localhost:50199/api/Todo'+prop.Id,{IsCompleted:'1'});
            await putTodo('Todo/' + todo.Id, { IsCompleted: '1' })
            onChange();

        } catch (error) {
            console.error(error);
        }
    }
    const handleDelete = async () => {
        try {
            //submit post request
            // const response = await axios.delete("http://localhost:50199/api/Todo/"+prop.Id);
            // const todos = response.data;
            await deleteTodo('Todo/' + todo.Id)
            onChange();

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Container >
                <Stack direction='horizontal' gap={4} className='shadow  rounded p-3 m-2 todo-item'>

                    <div className='me-auto text-start '>
                        <h2 className='text-greenish'>{todo.Title}</h2>
                        <h6 className='text-blur-grey'>{todo.Description}</h6>

                    </div>


                    <div>
                        {
                            isVisible &&(<Button onClick={handleComplete} className='rounded-0 btn-custom-icon'><FaCheck/> </Button>)
                        }
                        
                       
                        <Button onClick={handleDelete} className='rounded-0 btn-custom-icon'>
                            <FaTrash />
                        </Button>
                    </div>




                </Stack>
            </Container>
        </div>
    )
}

export default TodoItem