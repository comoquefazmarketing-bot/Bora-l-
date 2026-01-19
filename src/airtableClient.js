import Airtable from 'airtable';

// Conexão segura com o token do Felipe
const base = new Airtable({
  apiKey: 'patiEBmJuIklc75sW.3cf4b8ab8f0ab2c568b2bd65b519addb673bc8c945cf85f3ea02f0f10b20da9f'
}).base('appozTUADmOu0mjRS');

export const leadsTable = base('Leads');