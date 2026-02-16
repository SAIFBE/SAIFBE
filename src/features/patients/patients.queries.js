import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPatientApi, deletePatientApi, getPatientByIdApi, getPatientsApi, updatePatientApi } from '../../api/patients.api';

export const patientsKeys = {
  all: ['patients'],
  detail: (id) => ['patients', id],
};

export function usePatients() {
  return useQuery({ queryKey: patientsKeys.all, queryFn: getPatientsApi });
}

export function usePatient(id) {
  return useQuery({ queryKey: patientsKeys.detail(id), queryFn: () => getPatientByIdApi(id), enabled: Boolean(id) });
}

export function useCreatePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPatientApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: patientsKeys.all }),
  });
}

export function useUpdatePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => updatePatientApi(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: patientsKeys.all });
      queryClient.invalidateQueries({ queryKey: patientsKeys.detail(variables.id) });
    },
  });
}

export function useDeletePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePatientApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: patientsKeys.all }),
  });
}
