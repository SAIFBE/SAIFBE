export function WaitingRoomPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {['Waiting', 'In Progress', 'Done'].map((column) => (
        <div key={column} className="card">
          <h2 className="mb-2 font-semibold text-slate-800">{column}</h2>
          <p className="text-sm text-slate-500">Kanban queue column for patient flow.</p>
        </div>
      ))}
    </div>
  );
}
