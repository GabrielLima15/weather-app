interface CityTranslations {
  [key: string]: {
    [city: string]: string;
  };
}

export const cityTranslations: CityTranslations = {
  pt_br: {
    'São Paulo,SP': 'São Paulo, SP',
    'Rio de Janeiro,RJ': 'Rio de Janeiro, RJ',
    'Brasília,DF': 'Brasília, DF',
    'Salvador,BA': 'Salvador, BA',
    'Fortaleza,CE': 'Fortaleza, CE',
    'Belo Horizonte,MG': 'Belo Horizonte, MG',
    'Manaus,AM': 'Manaus, AM',
    'Curitiba,PR': 'Curitiba, PR',
    'Recife,PE': 'Recife, PE',
    'Porto Alegre,RS': 'Porto Alegre, RS'
  },
  en: {
    'São Paulo,SP': 'São Paulo, Brazil',
    'Rio de Janeiro,RJ': 'Rio de Janeiro, Brazil',
    'Brasília,DF': 'Brasilia, Brazil',
    'Salvador,BA': 'Salvador, Brazil',
    'Fortaleza,CE': 'Fortaleza, Brazil',
    'Belo Horizonte,MG': 'Belo Horizonte, Brazil',
    'Manaus,AM': 'Manaus, Brazil',
    'Curitiba,PR': 'Curitiba, Brazil',
    'Recife,PE': 'Recife, Brazil',
    'Porto Alegre,RS': 'Porto Alegre, Brazil'
  },
  es: {
    'São Paulo,SP': 'São Paulo, Brasil',
    'Rio de Janeiro,RJ': 'Río de Janeiro, Brasil',
    'Brasília,DF': 'Brasilia, Brasil',
    'Salvador,BA': 'Salvador, Brasil',
    'Fortaleza,CE': 'Fortaleza, Brasil',
    'Belo Horizonte,MG': 'Belo Horizonte, Brasil',
    'Manaus,AM': 'Manaos, Brasil',
    'Curitiba,PR': 'Curitiba, Brasil',
    'Recife,PE': 'Recife, Brasil',
    'Porto Alegre,RS': 'Porto Alegre, Brasil'
  }
};

export function translateCity(city: string, language: string = 'pt_br'): string {
  const translations = cityTranslations[language];
  return translations?.[city] || city;
} 