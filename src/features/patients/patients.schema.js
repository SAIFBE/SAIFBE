import { z } from 'zod';

export const patientSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  cin: z.string().min(4),
  phone: z.string().min(10),
  gender: z.enum(['Male', 'Female']),
  birthDate: z.string().min(1),
  allergies: z.string().optional(),
  medicalHistory: z.string().optional(),
  notes: z.string().optional(),
});
