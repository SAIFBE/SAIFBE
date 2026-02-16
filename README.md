# Professional Dental Clinic Management System (Frontend)

Production-ready React + Vite frontend scaffold for an academic SaaS-style medical platform (CMC Morocco).

## Stack
- React 18 + Vite
- React Router DOM
- TanStack React Query
- Axios with interceptors
- React Hook Form + Zod
- Tailwind CSS
- Context API auth with role-based guards

## Run
```bash
npm install
npm run dev
```

## Demo accounts (mock)
- Dentist (Admin): `admin@clinic.ma` / `Admin123!`
- Secretary: `secretary@clinic.ma` / `Sec12345!`
- Assistant: `assistant@clinic.ma` / `Assist123!`

## Key architecture
```txt
src/
  app/
  api/
  features/
  shared/
  providers/
  routes/
  layouts/
  components/
  hooks/
  utils/
```

Patients module is fully implemented as architecture reference (CRUD + profile tabs + validation + optimistic UX).
