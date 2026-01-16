export const BOOKING_STATUS = {
  PENDENTE: 'pendente',
  CONFIRMADA: 'confirmada',
  CANCELADA: 'cancelada',
  CONCLUIDA: 'concluida'
};

export const STATUS_LABELS = [
  { value: 'pendente', label: 'Pendente', color: '#F1C40F' },
  { value: 'confirmada', label: 'Confirmada', color: '#00BFA6' },
  { value: 'cancelada', label: 'Cancelada', color: '#E74C3C' },
  { value: 'concluida', label: 'Concluída', color: '#34495E' }
];

export const INITIAL_BOOKING_STATE = {
  space_id: "",
  guest_email: "",
  guest_name: "",
  check_in: "",
  check_out: "",
  guests_count: 1,
  total_price: 0,
  status: "pendente",
  notes: "",
  is_block: false // Campo que usamos para diferenciar bloqueios de agenda
};
