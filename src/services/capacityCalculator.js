// Tradutor de inventário para experiência sensorial - Felipe Makarios
export const translateInventory = (mesas, cadeiras, temPiscina) => {
  const capacidade = cadeiras;
  const vibe = temPiscina ? 'Refresco e Lazer' : 'Encontro e Churrasco';
  
  return {
    titulo: (capacidade > 30) ? 'Sítio para Grandes Festas' : 'Área de Lazer Acolhedora',
    descricao: "Cálculo técnico de capacidade",
    infra: 'Completa (Cozinha, TV e Internet)'
  };
};
