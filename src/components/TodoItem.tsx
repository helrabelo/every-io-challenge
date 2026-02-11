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
    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border border-gray-200">
      <span className="text-gray-800 truncate flex-1 mr-2">{item.text}</span>
      <div className="flex gap-1 shrink-0">
        <button
          onClick={() => onMoveLeft(item.id)}
          disabled={isFirstColumn}
          aria-label={`Move "${item.text}" left`}
          className="px-2 py-1 rounded text-sm font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          &larr;
        </button>
        <button
          onClick={() => onMoveRight(item.id)}
          disabled={isLastColumn}
          aria-label={`Move "${item.text}" right`}
          className="px-2 py-1 rounded text-sm font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
