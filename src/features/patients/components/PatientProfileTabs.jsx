const tabs = [
  { key: 'info', label: 'Info' },
  { key: 'history', label: 'History' },
  { key: 'imaging', label: 'Imaging' },
  { key: 'billing', label: 'Billing' },
];

export function PatientProfileTabs({ activeTab, onChange, patient }) {
  return (
    <div className="card">
      <div className="mb-4 flex gap-2 border-b border-slate-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`rounded-lg px-3 py-1 text-sm ${activeTab === tab.key ? 'bg-primary-50 text-primary-700' : 'text-slate-500'}`}
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === 'info' && <p className="text-sm text-slate-600">{patient.firstName} {patient.lastName} - {patient.phone}</p>}
      {activeTab === 'history' && <p className="text-sm text-slate-600">{patient.medicalHistory || 'No medical history noted.'}</p>}
      {activeTab === 'imaging' && <p className="text-sm text-slate-600">Imaging timeline will be synchronized with radiology module.</p>}
      {activeTab === 'billing' && <p className="text-sm text-slate-600">Billing statement and outstanding balances appear here.</p>}
    </div>
  );
}
