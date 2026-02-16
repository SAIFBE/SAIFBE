import { mockDb, wait } from '../mocks/db';

export async function getPatientsApi() {
  await wait();
  return [...mockDb.patients].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getPatientByIdApi(id) {
  await wait();
  const patient = mockDb.patients.find((item) => item.id === id);
  if (!patient) {
    throw new Error('Patient not found');
  }
  return patient;
}

export async function createPatientApi(payload) {
  await wait();
  const created = {
    id: `p${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  };
  mockDb.patients.push(created);
  return created;
}

export async function updatePatientApi(id, payload) {
  await wait();
  const index = mockDb.patients.findIndex((item) => item.id === id);
  if (index === -1) throw new Error('Patient not found');
  mockDb.patients[index] = { ...mockDb.patients[index], ...payload };
  return mockDb.patients[index];
}

export async function deletePatientApi(id) {
  await wait();
  const index = mockDb.patients.findIndex((item) => item.id === id);
  if (index === -1) throw new Error('Patient not found');
  const [removed] = mockDb.patients.splice(index, 1);
  return removed;
}
