export const mockDb = {
  users: [
    { id: 'u1', email: 'admin@clinic.ma', password: 'Admin123!', role: 'dentist', fullName: 'Dr. Sara El Fassi' },
    { id: 'u2', email: 'secretary@clinic.ma', password: 'Sec12345!', role: 'secretary', fullName: 'Imane Bennis' },
    { id: 'u3', email: 'assistant@clinic.ma', password: 'Assist123!', role: 'assistant', fullName: 'Youssef Kadiri' },
  ],
  patients: [
    {
      id: 'p1',
      firstName: 'Nadia',
      lastName: 'Alaoui',
      cin: 'AB123456',
      phone: '0611223344',
      gender: 'Female',
      birthDate: '1990-05-12',
      allergies: 'Penicillin',
      medicalHistory: 'Diabetes type 2',
      notes: 'Prefers morning appointments',
      createdAt: '2026-01-12T08:30:00.000Z',
    },
  ],
};

export const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));
