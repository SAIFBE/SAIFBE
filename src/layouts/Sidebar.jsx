import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Roles } from '../utils/rbac';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', roles: [Roles.DENTIST, Roles.SECRETARY, Roles.ASSISTANT] },
  { to: '/patients', label: 'Patients', roles: [Roles.DENTIST, Roles.SECRETARY, Roles.ASSISTANT] },
  { to: '/appointments', label: 'Appointments', roles: [Roles.DENTIST, Roles.SECRETARY] },
  { to: '/waiting-room', label: 'Waiting Room', roles: [Roles.DENTIST, Roles.ASSISTANT] },
  { to: '/dental-chart', label: 'Dental Chart', roles: [Roles.DENTIST, Roles.ASSISTANT] },
  { to: '/imaging', label: 'Imaging', roles: [Roles.DENTIST, Roles.ASSISTANT] },
  { to: '/prescriptions', label: 'Prescriptions', roles: [Roles.DENTIST] },
  { to: '/billing', label: 'Billing', roles: [Roles.DENTIST, Roles.SECRETARY] },
  { to: '/care-sheets', label: 'Care Sheets', roles: [Roles.DENTIST, Roles.SECRETARY] },
  { to: '/stock', label: 'Stock', roles: [Roles.DENTIST, Roles.ASSISTANT] },
  { to: '/users', label: 'Users & Roles', roles: [Roles.DENTIST] },
  { to: '/settings', label: 'Settings', roles: [Roles.DENTIST] },
];

export function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 lg:block">
      <h1 className="mb-6 text-xl font-bold text-slate-900">CMC Dental SaaS</h1>
      <nav className="space-y-1">
        {navItems
          .filter((item) => item.roles.includes(user.role))
          .map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
      </nav>
    </aside>
  );
}
