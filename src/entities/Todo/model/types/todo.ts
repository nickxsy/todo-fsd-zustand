export type TodoId = UniqId;
export type TodoTitle = Brand<string, 'TodoTitle'>;
export type TodoCompleted = Brand<boolean, 'TodoCompleted'>;

export type Todo = {
  id: TodoId;
  title: TodoTitle;
  completed?: TodoCompleted;
};
