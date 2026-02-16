import { useAuth } from '../hooks/useAuth';
import { roleLabel } from '../utils/rbac';
import { Button } from '../shared/ui/Button';

export function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Professional Dental Clinic Management</h2>
        <p className="text-xs text-slate-500">{roleLabel[user.role]} session</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right text-sm">
          <p className="font-medium text-slate-700">{user.fullName}</p>
          <p className="text-slate-500">{user.email}</p>
        </div>
        <Button variant="secondary" onClick={logout}>Logout</Button>
      </div>
    </header>
  );
}
