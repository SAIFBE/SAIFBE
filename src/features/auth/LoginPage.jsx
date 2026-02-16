import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: 'admin@clinic.ma', password: 'Admin123!' },
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
      navigate('/dashboard');
    } catch {
      setError('root', { message: 'Invalid credentials. Try demo accounts in mock DB.' });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-cyan-100 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900">Dental Clinic Login</h1>
        <p className="mb-6 mt-1 text-sm text-slate-500">Secure access to clinic operations</p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
          {errors.root && <p className="text-sm text-red-600">{errors.root.message}</p>}
          <Button type="submit" className="w-full" isLoading={isAuthLoading}>Sign in</Button>
        </form>
      </div>
    </div>
  );
}
