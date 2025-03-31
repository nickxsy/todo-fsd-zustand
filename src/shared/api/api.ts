import { sleep } from '@/shared/utils';

const BASE_URL = import.meta.env.VITE_BASE_URL + '/todos';

export const todosApi = {
  getTodos: async (params?: string) => {
    try {
      const res = await fetch(`${BASE_URL}${params ? `?${params}` : ''}`, {
        method: 'GET'
      });

      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);

      // Задержка для симуляции загрузки
      await sleep(200);

      return await res.json();
    } catch (error) {
      console.error('Ошибка загрузки todos:', error);
      return null;
    }
  },

  getTodoById: async (id: string) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error(`Ошибка загрузки todo ${id}:`, error);
      return null;
    }
  },

  createTodo: async (title: string) => {
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Date.now().toString(),
          title,
          completed: false
        })
      });
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error(`Ошибка создания todo ${title}:`, error);
      return null;
    }
  },

  updateTodo: async (id: string, title: string, completed: boolean) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed })
      });
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error(`Ошибка обновления todo ${id}:`, error);
      return null;
    }
  },

  removeTodoById: async (id: string) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error(`Ошибка удаления todo ${id}:`, error);
      return null;
    }
  }
};
