import axios from 'axios';

const API_URL = '/api/todos';

/**
 * Service for interacting with the Todo API endpoints
 */
const todoService = {
  /**
   * Get all todos
   * @returns {Promise<Array>} Array of todos
   */
  getAllTodos: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch todos');
    }
  },

  /**
   * Get a single todo by ID
   * @param {string} id - Todo ID
   * @returns {Promise<Object>} Todo object
   */
  getTodoById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to fetch todo');
    }
  },

  /**
   * Create a new todo
   * @param {Object} todo - Todo object with title
   * @param {string} todo.title - Todo title
   * @returns {Promise<Object>} Created todo object
   */
  createTodo: async (todo) => {
    try {
      const response = await axios.post(API_URL, todo);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to create todo');
    }
  },

  /**
   * Update a todo
   * @param {string} id - Todo ID
   * @param {Object} updates - Object containing fields to update
   * @param {string} [updates.title] - New title
   * @param {boolean} [updates.isRecorded] - New recorded status
   * @returns {Promise<Object>} Updated todo object
   */
  updateTodo: async (id, updates) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updates);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to update todo');
    }
  },

  /**
   * Delete a todo
   * @param {string} id - Todo ID
   * @returns {Promise<Object>} Success message
   */
  deleteTodo: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to delete todo');
    }
  },

  /**
   * Toggle the recorded status of a todo
   * @param {string} id - Todo ID
   * @param {boolean} isRecorded - New recorded status
   * @returns {Promise<Object>} Updated todo object
   */
  toggleRecorded: async (id, isRecorded) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { isRecorded });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Failed to toggle recorded status');
    }
  }
};

export default todoService; 