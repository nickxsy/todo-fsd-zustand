import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Container, Spinner, Stack, Tabs, Text } from '@/shared/ui';

import { useTodoStore } from '@/entities/Todo';

import { CreateTodoForm } from '@/features/CreateTodoForm';

import { TodoEmpty } from './TodoEmpty';
import { TodoItem } from './TodoItem';

const TodoListSpinner = styled(Spinner)`
  margin: 0 auto;
`;

export const TodoList = () => {
  const { todos, loading, fetchTodos } = useTodoStore();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchTodos(activeTab);
  }, [fetchTodos, activeTab]);

  return (
    <Container size="small">
      <Stack $gap="large">
        <Text as="h2" $serif $variant="large">
          Список задач
        </Text>
        <CreateTodoForm />

        <Tabs
          tabs={[`Все`, `Выполненные`, `Не выполненные `]}
          activeTab={activeTab}
          onChange={index => setActiveTab(index)}
          tabContent={[
            <>
              {loading ? (
                <TodoListSpinner />
              ) : todos.length > 0 ? (
                <Stack>
                  <Stack as="ul">
                    {todos.map((item, index) => (
                      <TodoItem data={item} index={index + 1} key={item.id} />
                    ))}
                  </Stack>
                  <Text $variant="small">Всего задач: {todos.length} </Text>
                </Stack>
              ) : (
                <TodoEmpty />
              )}
            </>,
            <>
              {loading ? (
                <TodoListSpinner />
              ) : todos.length > 0 ? (
                <Stack>
                  <Stack as="ul">
                    {todos.map((item, index) => (
                      <TodoItem data={item} index={index + 1} key={item.id} />
                    ))}
                  </Stack>
                  <Text $variant="small">Всего задач: {todos.length} </Text>
                </Stack>
              ) : (
                <TodoEmpty />
              )}
            </>,
            <>
              {loading ? (
                <TodoListSpinner />
              ) : todos.length > 0 ? (
                <Stack>
                  <Stack as="ul">
                    {todos.map((item, index) => (
                      <TodoItem data={item} index={index + 1} key={item.id} />
                    ))}
                  </Stack>
                  <Text $variant="small">Всего задач: {todos.length} </Text>
                </Stack>
              ) : (
                <TodoEmpty />
              )}
            </>
          ]}
        />
      </Stack>
    </Container>
  );
};
