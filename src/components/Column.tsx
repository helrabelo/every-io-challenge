import { TodoItem as TodoItemType } from '../types';
import { TodoItem } from './TodoItem';

interface ColumnProps {
  title: string;
  items: TodoItemType[];
  onMoveLeft: (id: string) => void;
  onMoveRight: (id: string) => void;
  isFirstColumn: boolean;
  isLastColumn: boolean;
}

export function Column({
  title,
  items,
  onMoveLeft,
  onMoveRight,
  isFirstColumn,
  isLastColumn,
}: ColumnProps) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
        {title}
      </h2>
      <div className="flex flex-col gap-3 min-h-[300px]">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onMoveLeft={onMoveLeft}
            onMoveRight={onMoveRight}
            isFirstColumn={isFirstColumn}
            isLastColumn={isLastColumn}
          />
        ))}
      </div>
    </div>
  );
}
