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
    <div className="flex-1 min-w-0">
      <h2 className="text-lg font-bold mb-4 text-gray-800">{title}</h2>
      <div className="flex flex-col gap-2 min-h-[200px] bg-gray-100 rounded-lg p-3">
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
