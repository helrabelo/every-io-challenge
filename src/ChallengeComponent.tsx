import { COLUMNS } from './types';

export function ChallengeComponent() {
  return (
    <div className="flex gap-6 p-8">
      {COLUMNS.map((col) => (
        <div key={col.key} className="flex-1">
          <h2 className="text-lg font-bold mb-4 text-gray-800">{col.label}</h2>
        </div>
      ))}
    </div>
  );
}
