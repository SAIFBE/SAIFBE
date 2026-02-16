import { useMemo, useState } from 'react';
import { Loader } from '../../shared/ui/Loader';
import { Table } from '../../shared/ui/Table';
import { Button } from '../../shared/ui/Button';
import { Modal } from '../../shared/ui/Modal';
import { ConfirmDialog } from '../../shared/ui/ConfirmDialog';
import { PatientForm } from './components/PatientForm';
import { PatientProfileTabs } from './components/PatientProfileTabs';
import { useCreatePatient, useDeletePatient, usePatients, useUpdatePatient } from './patients.queries';

const emptyPatient = {
  firstName: '',
  lastName: '',
  cin: '',
  phone: '',
  gender: 'Female',
  birthDate: '',
  allergies: '',
  medicalHistory: '',
  notes: '',
};

export function PatientsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [activeTab, setActiveTab] = useState('info');

  const patientsQuery = usePatients();
  const createMutation = useCreatePatient();
  const updateMutation = useUpdatePatient();
  const deleteMutation = useDeletePatient();

  const columns = useMemo(
    () => [
      { key: 'fullName', title: 'Patient', render: (row) => `${row.firstName} ${row.lastName}` },
      { key: 'cin', title: 'CIN' },
      { key: 'phone', title: 'Phone' },
      { key: 'gender', title: 'Gender' },
      {
        key: 'actions',
        title: 'Actions',
        render: (row) => (
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => { setSelectedPatient(row); setActiveTab('info'); }}>Profile</Button>
            <Button variant="secondary" onClick={() => { setEditingPatient(row); setIsModalOpen(true); }}>Edit</Button>
            <Button variant="danger" onClick={() => setDeleteId(row.id)}>Delete</Button>
          </div>
        ),
      },
    ],
    [],
  );

  const handleSubmitPatient = async (values) => {
    if (editingPatient) {
      await updateMutation.mutateAsync({ id: editingPatient.id, payload: values });
    } else {
      await createMutation.mutateAsync(values);
    }
    setEditingPatient(null);
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    await deleteMutation.mutateAsync(deleteId);
    setDeleteId(null);
  };

  if (patientsQuery.isLoading) {
    return <Loader message="Loading patient dossiers..." />;
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patients Management</h1>
          <p className="text-sm text-slate-500">Full medical dossier with enterprise-grade workflows</p>
        </div>
        <Button onClick={() => { setEditingPatient(null); setIsModalOpen(true); }}>New Patient</Button>
      </div>

      <Table columns={columns} data={patientsQuery.data || []} />

      {selectedPatient && (
        <PatientProfileTabs activeTab={activeTab} onChange={setActiveTab} patient={selectedPatient} />
      )}

      <Modal isOpen={isModalOpen} title={editingPatient ? 'Edit Patient' : 'Create Patient'} onClose={() => setIsModalOpen(false)}>
        <PatientForm
          initialValues={editingPatient || emptyPatient}
          onSubmit={handleSubmitPatient}
          isLoading={createMutation.isPending || updateMutation.isPending}
        />
      </Modal>

      <ConfirmDialog
        isOpen={Boolean(deleteId)}
        title="Delete patient dossier"
        message="This action will remove this patient from the current mock database."
        onCancel={() => setDeleteId(null)}
        onConfirm={handleDelete}
        isLoading={deleteMutation.isPending}
      />
    </section>
  );
}
