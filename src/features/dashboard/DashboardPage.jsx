const stats = [
  { label: 'Today Appointments', value: 24 },
  { label: 'Patients in Waiting Room', value: 7 },
  { label: 'Revenue (MAD)', value: '18,200' },
  { label: 'Pending Invoices', value: 12 },
];

export function DashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Clinic Command Center</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="card">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
