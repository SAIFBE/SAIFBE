import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../features/auth/LoginPage';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute, RoleGuard } from './guards';
import { Roles } from '../utils/rbac';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { PatientsPage } from '../features/patients/PatientsPage';
import { AppointmentsPage } from '../features/appointments/AppointmentsPage';
import { WaitingRoomPage } from '../features/waiting-room/WaitingRoomPage';
import { DentalChartPage } from '../features/dental/DentalChartPage';
import { ImagingPage } from '../features/imaging/ImagingPage';
import { PrescriptionsPage } from '../features/prescriptions/PrescriptionsPage';
import { BillingPage } from '../features/billing/BillingPage';
import { CareSheetsPage } from '../features/care-sheets/CareSheetsPage';
import { StockPage } from '../features/stock/StockPage';
import { UsersPage } from '../features/users/UsersPage';
import { SettingsPage } from '../features/settings/SettingsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientsPage />} />

          <Route element={<RoleGuard allowedRoles={[Roles.DENTIST, Roles.SECRETARY]} />}>
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/care-sheets" element={<CareSheetsPage />} />
          </Route>

          <Route element={<RoleGuard allowedRoles={[Roles.DENTIST, Roles.ASSISTANT]} />}>
            <Route path="/waiting-room" element={<WaitingRoomPage />} />
            <Route path="/dental-chart" element={<DentalChartPage />} />
            <Route path="/imaging" element={<ImagingPage />} />
            <Route path="/stock" element={<StockPage />} />
          </Route>

          <Route element={<RoleGuard allowedRoles={[Roles.DENTIST]} />}>
            <Route path="/prescriptions" element={<PrescriptionsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
