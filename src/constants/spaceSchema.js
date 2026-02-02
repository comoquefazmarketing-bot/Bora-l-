export const SPACE_TYPES = [
  { value: 'piscina', label: 'Piscina' },
  { value: 'chacara', label: 'Chácara' },
  { value: 'salao_festas', label: 'Salão de Festas' },
  { value: 'quadra_esportes', label: 'Quadra de Esportes' },
  { value: 'espaco_eventos', label: 'Espaço de Eventos' },
  { value: 'area_camping', label: 'Ãrea de Camping' },
  { value: 'chale', label: 'Chalé' },
  { value: 'sitio', label: 'SÃ­tio' },
  { value: 'outro', label: 'Outro' }
];

export const INITIAL_SPACE_STATE = {
  title: "",
  description: "",
  short_description: "",
  city: "",
  state: "",
  latitude: 0,
  longitude: 0,
  price_per_day: 0,
  capacity: 1,
  space_type: "piscina",
  amenities: [],
  images: [],
  main_image: "",
  rules: "",
  available: true,
  rating: 5.0,
  reviews_count: 0
};
