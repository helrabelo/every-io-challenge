export type TodoStatus = 'todo' | 'inProgress' | 'done';

export interface TodoItem {
  id: string;
  text: string;
  status: TodoStatus;
}

export const COLUMN_ORDER: TodoStatus[] = ['todo', 'inProgress', 'done'];

export const COLUMNS: { key: TodoStatus; label: string }[] = [
  { key: 'todo', label: 'Todo' },
  { key: 'inProgress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
];
