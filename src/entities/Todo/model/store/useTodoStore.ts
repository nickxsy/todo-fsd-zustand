import { create } from 'zustand';

import { todosApi } from '@/shared/api';

import { Todo, TodoCompleted, TodoId, TodoTitle } from '../types/todo';

interface TodoState {
  todos: Todo[];
  loading: boolean;

  fetchTodos: (activeTab: number) => Promise<void>;
  createTodo: (title: TodoTitle) => Promise<void>;
  removeTodo: (id: TodoId) => Promise<void>;
  updateTodo: (
    id: TodoId,
    title: TodoTitle,
    completed: TodoCompleted
  ) => Promise<void>;
}

export const useTodoStore = create<TodoState>(set => ({
  todos: [],
  loading: false,

  fetchTodos: async (activeTab = 0) => {
    set({ loading: true });

    try {
      const todos = await todosApi.getTodos(
        activeTab === 0 ? '' : `completed=${activeTab === 1}`
      );

      set({
        todos: todos || []
      });
    } catch (err) {
      console.error('Error fetching todos:', err);
      set({ todos: [] });
    } finally {
      set({ loading: false });
    }
  },

  createTodo: async (title: string) => {
    try {
      const res = await todosApi.createTodo(title);
      if (res) {
        set(state => {
          const updatedTodos = [...state.todos, res];
          return {
            todos: updatedTodos,
            completedCount: updatedTodos.filter(todo => todo.completed).length,
            uncompletedCount: updatedTodos.filter(todo => !todo.completed)
              .length
          };
        });
      }
    } catch (err) {
      console.error('Error creating todo:', err);
    }
  },

  updateTodo: async (id, title, completed) => {
    try {
      await todosApi.updateTodo(id, title, completed);
      set(state => {
        const updatedTodos = state.todos.map(todo =>
          todo.id === id ? { ...todo, title, completed } : todo
        );

        return {
          todos: updatedTodos,
          completedCount: updatedTodos.filter(todo => todo.completed).length,
          uncompletedCount: updatedTodos.filter(todo => !todo.completed).length
        };
      });
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  },

  removeTodo: async id => {
    try {
      set(state => {
        const updatedTodos = state.todos.filter(todo => todo.id !== id);
        return {
          todos: updatedTodos,
          completedCount: updatedTodos.filter(todo => todo.completed).length,
          uncompletedCount: updatedTodos.filter(todo => !todo.completed).length
        };
      });

      await todosApi.removeTodoById(id);
    } catch (err) {
      console.error('Error removing todo:', err);
    }
  }
}));
