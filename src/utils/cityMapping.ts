export const cityApiToKey: Record<string, string> = {
  'San Paulo': 'São Paulo,SP',
  'Rio De Janeiro': 'Rio de Janeiro,RJ',
  'Brasilia': 'Brasília,DF',
  // adicione mais mapeamentos conforme necessário
};

export function getCityKey(apiCityName: string): string {
  return cityApiToKey[apiCityName] || apiCityName;
} 