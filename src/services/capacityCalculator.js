export const translateInventory = (mesas, cadeiras, temPiscina) => {
  const capacidade = cadeiras;
  const vibe = temPiscina ? "Refresco e Lazer" : "Encontro e Churrasco";
  return {
    titulo: (capacidade > 30) ? "Sítio para Grandes Festas" : "Área de Lazer Acolhedora",
    descricao: `Espaço estruturado para ${capacidade} pessoas com ambiente de ${vibe}.`,
    infra: "Completa (Cozinha, TV e Internet)"
  };
};