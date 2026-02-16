import { mockDb, wait } from '../mocks/db';

export async function loginApi(payload) {
  await wait();
  const user = mockDb.users.find((item) => item.email === payload.email && item.password === payload.password);
  if (!user) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  return {
    accessToken: `mock-token-${user.id}`,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    },
  };
}
