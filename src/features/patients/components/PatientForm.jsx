import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { patientSchema } from '../patients.schema';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

export function PatientForm({ initialValues, onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(patientSchema),
    defaultValues: initialValues,
  });

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" {...register('firstName')} error={errors.firstName?.message} />
      <Input label="Last Name" {...register('lastName')} error={errors.lastName?.message} />
      <Input label="CIN" {...register('cin')} error={errors.cin?.message} />
      <Input label="Phone" {...register('phone')} error={errors.phone?.message} />
      <label className="block space-y-1 text-sm">
        <span className="font-medium text-slate-700">Gender</span>
        <select className="w-full rounded-lg border border-slate-300 px-3 py-2" {...register('gender')}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </label>
      <Input label="Birth Date" type="date" {...register('birthDate')} error={errors.birthDate?.message} />
      <Input label="Allergies" {...register('allergies')} error={errors.allergies?.message} />
      <Input label="Medical History" {...register('medicalHistory')} error={errors.medicalHistory?.message} />
      <div className="md:col-span-2">
        <Input label="Clinical Notes" {...register('notes')} error={errors.notes?.message} />
      </div>
      <div className="md:col-span-2 flex justify-end">
        <Button type="submit" isLoading={isLoading}>Save Patient</Button>
      </div>
    </form>
  );
}
