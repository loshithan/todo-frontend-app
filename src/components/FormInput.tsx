import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, FormControl, FormGroup, Button} from 'react-bootstrap';
import {  postTodo } from '../apiService'




function FormInput({ onChange }: { onChange: () => void }) {
    //component takes onchange callback to trigger app component render on form submit
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            //submit post request
            await postTodo('Todo', { Title: title, Description: desc });
            onChange();
            console.log('rendered');



        } catch (error) {
            console.error(error);
        }




    }
    return (
        <Form onSubmit={handleSubmit}>
            <Container className='p-3 py-5'>


                <Row>
                    <Col xs={12} md={5} className='pt-2'>
                        <FormGroup className='text-start '>

                            <Form.Label >
                                <b>Title</b>

                            </Form.Label>
                            <FormControl
                                id="title"
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />


                        </FormGroup>
                    </Col>
                    <Col xs={12} md={5} className='pt-2'>
                        <FormGroup className='text-start '>
                            <Form.Label>
                                <b>Description</b>

                            </Form.Label>
                            <FormControl
                                id="description"
                                type="text"
                                placeholder="Enter description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            />


                        </FormGroup>
                    </Col>
                    <Col xs={12} md={2} className='pt-4'>
                        <Button type='submit' size="lg" className='rounded-0 bg-green btn-custom-greenish' >
                            Add
                        </Button>
                    </Col>
                </Row>
                <hr />
            </Container>
        </Form>

    )
}

export default FormInput