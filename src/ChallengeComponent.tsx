import { useState } from 'react';
import { COLUMNS, COLUMN_ORDER, TodoItem } from './types';
import { Column } from './components/Column';

export function ChallengeComponent() {
  const [items, setItems] = useState<TodoItem[]>([]);

  function moveLeft(id: string) {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const idx = COLUMN_ORDER.indexOf(item.status);
        if (idx <= 0) return item;
        return { ...item, status: COLUMN_ORDER[idx - 1] };
      })
    );
  }

  function moveRight(id: string) {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const idx = COLUMN_ORDER.indexOf(item.status);
        if (idx >= COLUMN_ORDER.length - 1) return item;
        return { ...item, status: COLUMN_ORDER[idx + 1] };
      })
    );
  }

  return (
    <div className="flex gap-6 p-8">
      {COLUMNS.map((col, i) => (
        <Column
          key={col.key}
          title={col.label}
          items={items.filter((item) => item.status === col.key)}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
          isFirstColumn={i === 0}
          isLastColumn={i === COLUMNS.length - 1}
        />
      ))}
    </div>
  );
}
