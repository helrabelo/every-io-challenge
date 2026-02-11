import { TodoItem as TodoItemType } from '../types';

interface TodoItemProps {
  item: TodoItemType;
  onMoveLeft: (id: string) => void;
  onMoveRight: (id: string) => void;
  isFirstColumn: boolean;
  isLastColumn: boolean;
}

export function TodoItem({
  item,
  onMoveLeft,
  onMoveRight,
  isFirstColumn,
  isLastColumn,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
      <button
        onClick={() => onMoveLeft(item.id)}
        disabled={isFirstColumn}
        aria-label={`Move "${item.text}" left`}
        className={`w-10 h-10 rounded flex items-center justify-center text-white text-lg font-bold shrink-0 transition-colors ${
          isFirstColumn
            ? 'bg-red-300 cursor-not-allowed'
            : 'bg-red-800 hover:bg-red-900'
        }`}
      >
        &larr;
      </button>
      <span className="flex-1 text-center text-gray-800 truncate">
        {item.text}
      </span>
      <button
        onClick={() => onMoveRight(item.id)}
        disabled={isLastColumn}
        aria-label={`Move "${item.text}" right`}
        className={`w-10 h-10 rounded flex items-center justify-center text-white text-lg font-bold shrink-0 transition-colors ${
          isLastColumn
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-800 hover:bg-green-900'
        }`}
      >
        &rarr;
      </button>
    </div>
  );
}
