import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import { db, auth } from '../firebase'
import { query, collection, onSnapshot, updateDoc, addDoc, doc, deleteDoc } from 'firebase/firestore'
const DisplayTodo = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const createTodo = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a Task')
            return;
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false,
        });
        setInput('');
    }
    useEffect(() => {
        const q = query(collection(db, 'todos'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArr);
        });
        return () => unsubscribe();
    }, []);

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed,
        });
    };

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id));
    };

    return (
        <div className='todos'>
            <div className='container'>
                <header class="bg-warning text-white p-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                                <h1 class="text-black fw-bold">ToDo List</h1>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => auth.signOut()} className='btn btn-secondary'>Sign Out</button>
                        </div>
                    </div>
                </header>

                <div className="container mt-3">
                    <form onSubmit={createTodo}>
                        <div className="row">
                            <div className='col-lg-7 col-md-7 col-sm-7'>
                                <input value={input} onChange={(e) => setInput(e.target.value)} className='form-control' type='text' placeholder='What do you want to do today?' />
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <button className='btn btn-outline-info'>Add</button>
                        </div>
                    </form>
                    <div className="mt-4">
                        <ul className='list-group'>
                            {todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    deleteTodo={deleteTodo}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayTodo