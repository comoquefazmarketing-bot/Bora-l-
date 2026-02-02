export const translateInventory = (mesas, cadeiras, temPiscina) => {
  const capacidade = cadeiras;
  const vibe = temPiscina ? "Refresco e Lazer" : "Encontro e Churrasco";
  return {
    titulo: (capacidade > 30) ? "SÃ­tio para Grandes Festas" : "Ãrea de Lazer Acolhedora",
    descricao: `Espaço estruturado para ${capacidade} pessoas com ambiente de ${vibe}.`,
    infra: "Completa (Cozinha, TV e Internet)"
  };
};