'use client';

import { useState, useEffect } from 'react';
import todoService from '@/services/todoService';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [error, setError] = useState('');

  // Load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to load todos');
    }
  };

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    try {
      const newTodo = await todoService.createTodo({ title: newTodoTitle });
      setTodos([newTodo, ...todos]);
      setNewTodoTitle('');
      setError('');
    } catch (err) {
      setError('Failed to create todo');
    }
  };

  const handleUpdateTodo = async (id, title) => {
    try {
      const updatedTodo = await todoService.updateTodo(id, { title });
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
      setEditingTodo(null);
      setError('');
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  const handleToggleRecorded = async (id, currentStatus) => {
    try {
      const updatedTodo = await todoService.toggleRecorded(id, !currentStatus);
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
      setError('');
    } catch (err) {
      setError('Failed to update todo status');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>YouTube Video Ideas</h1>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Create Todo Form */}
      <form onSubmit={handleCreateTodo}>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter video idea"
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Idea</button>
      </form>

      {/* Todo List */}
      <div style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <div key={todo._id} style={{ marginBottom: '10px' }}>
            {editingTodo === todo._id ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdateTodo(todo._id, e.target.title.value);
              }}>
                <input
                  type="text"
                  name="title"
                  defaultValue={todo.title}
                  style={{ marginRight: '10px' }}
                />
                <button type="submit">Save</button>
                <button 
                  type="button" 
                  onClick={() => setEditingTodo(null)}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <span style={{ marginRight: '10px' }}>
                  {todo.title}
                </span>
                <button 
                  onClick={() => handleToggleRecorded(todo._id, todo.isRecorded)}
                  style={{ marginRight: '10px' }}
                >
                  {todo.isRecorded ? 'Mark as Not Recorded' : 'Mark as Recorded'}
                </button>
                <button 
                  onClick={() => setEditingTodo(todo._id)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteTodo(todo._id)}
                  style={{ color: 'red' }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
