export interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

export type ToggleTodo = (id: string) => void; // ← теперь принимает id
export type DeleteTodo = (id: string) => void;
