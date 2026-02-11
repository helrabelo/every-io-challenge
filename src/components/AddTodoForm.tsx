import { useState, FormEvent } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task"
        className="w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center text-2xl leading-none hover:bg-blue-700 transition-colors"
      >
        +
      </button>
    </form>
  );
}
