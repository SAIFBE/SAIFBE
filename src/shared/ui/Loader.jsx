export function Loader({ message = 'Loading...' }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">{message}</div>;
}
