interface State {
  name: string;
  cities: string[];
}

export const defaultStates = {
  pt_br: [
    {
      name: 'Acre',
      cities: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá', 'Feijó', 'Brasileia', 'Epitaciolândia', 'Xapuri', 'Porto Acre', 'Plácido de Castro', 'Senador Guiomard', 'Acrelândia', 'Manoel Urbano', 'Assis Brasil', 'Rodrigues Alves']
    },
    {
      name: 'Alagoas',
      cities: ['Maceió', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios', 'União dos Palmares', 'São Miguel dos Campos', 'Penedo', 'Marechal Deodoro', 'Coruripe', 'Campo Alegre', 'Delmiro Gouveia', 'Santana do Ipanema', 'São Luís do Quitunde', 'Teotônio Vilela', 'Girau do Ponciano']
    },
    {
      name: 'Amapá',
      cities: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque', 'Mazagão', 'Porto Grande', 'Tartarugalzinho', 'Pedra Branca do Amapari', 'Vitória do Jari', 'Calçoene', 'Amapá', 'Ferreira Gomes', 'Serra do Navio', 'Cutias', 'Itaubal']
    },
    {
      name: 'Amazonas',
      cities: ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari', 'Tefé', 'Tabatinga', 'Maués', 'Manicoré', 'Humaitá', 'Iranduba', 'São Gabriel da Cachoeira', 'Lábrea', 'Careiro', 'Borba']
    },
    {
      name: 'Bahia',
      cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro', 'Itabuna', 'Lauro de Freitas', 'Ilhéus', 'Jequié', 'Teixeira de Freitas', 'Barreiras', 'Alagoinhas', 'Porto Seguro', 'Simões Filho', 'Paulo Afonso']
    },
    {
      name: 'Ceará',
      cities: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato', 'Itapipoca', 'Maranguape', 'Iguatu', 'Quixadá', 'Pacatuba', 'Quixeramobim', 'Aquiraz', 'Russas', 'Canindé']
    },
    {
      name: 'Distrito Federal',
      cities: ['Brasília', 'Ceilândia', 'Taguatinga', 'Samambaia', 'Plano Piloto', 'Planaltina', 'Águas Claras', 'Recanto das Emas', 'Gama', 'Guará', 'Santa Maria', 'Sobradinho', 'São Sebastião', 'Vicente Pires', 'Paranoá']
    },
    {
      name: 'Espírito Santo',
      cities: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares', 'São Mateus', 'Guarapari', 'Colatina', 'Cachoeiro de Itapemirim', 'Aracruz']
    },
    {
      name: 'Goiás',
      cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia', 'Águas Lindas de Goiás', 'Valparaíso de Goiás', 'Trindade', 'Formosa', 'Novo Gama']
    },
    {
      name: 'Maranhão',
      cities: ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Timon', 'Caxias', 'Codó', 'Paço do Lumiar', 'Açailândia', 'Bacabal', 'Balsas']
    },
    {
      name: 'Mato Grosso',
      cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra', 'Cáceres', 'Sorriso', 'Lucas do Rio Verde', 'Primavera do Leste', 'Alta Floresta', 'Barra do Garças', 'Nova Mutum', 'Campo Verde', 'Pontes e Lacerda', 'Juína']
    },
    {
      name: 'Mato Grosso do Sul',
      cities: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã', 'Naviraí', 'Nova Andradina', 'Aquidauana', 'Sidrolândia', 'Maracaju', 'Paranaíba', 'Coxim', 'Amambai', 'Rio Brilhante', 'Jardim']
    },
    {
      name: 'Minas Gerais',
      cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba', 'Governador Valadares', 'Ipatinga', 'Sete Lagoas', 'Divinópolis', 'Santa Luzia', 'Ibirité', 'Poços de Caldas']
    },
    {
      name: 'Pará',
      cities: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Castanhal', 'Parauapebas', 'Abaetetuba', 'Cametá', 'Bragança', 'Altamira', 'Marituba', 'Tucuruí', 'Paragominas', 'Barcarena', 'Tailândia']
    },
    {
      name: 'Paraíba',
      cities: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux', 'Sousa', 'Cabedelo', 'Cajazeiras', 'Guarabira', 'Sapé', 'Mamanguape', 'Queimadas', 'Monteiro', 'Esperança', 'Pombal']
    },
    {
      name: 'Paraná',
      cities: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'São José dos Pinhais', 'Foz do Iguaçu', 'Colombo', 'Guarapuava', 'Paranaguá', 'Apucarana', 'Toledo', 'Araucária', 'Pinhais', 'Campo Largo']
    },
    {
      name: 'Pernambuco',
      cities: ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista', 'Cabo de Santo Agostinho', 'Camaragibe', 'Garanhuns', 'Vitória de Santo Antão', 'Igarassu', 'São Lourenço da Mata', 'Abreu e Lima', 'Serra Talhada', 'Araripina']
    },
    {
      name: 'Piauí',
      cities: ['Teresina', 'Parnaíba', 'Picos', 'Piripiri', 'Floriano', 'Campo Maior', 'Barras', 'União', 'Altos', 'Pedro II', 'José de Freitas', 'Oeiras', 'São Raimundo Nonato', 'Esperantina', 'Luís Correia']
    },
    {
      name: 'Rio de Janeiro',
      cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói', 'Belford Roxo', 'São João de Meriti', 'Petrópolis', 'Volta Redonda', 'Magé', 'Itaboraí', 'Mesquita', 'Nilópolis', 'Maricá', 'Cabo Frio']
    },
    {
      name: 'Rio Grande do Norte',
      cities: ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Macaíba', 'Ceará-Mirim', 'Caicó', 'Assu', 'Currais Novos', 'São José de Mipibu', 'Nova Cruz', 'João Câmara', 'Santa Cruz', 'Apodi', 'Pau dos Ferros']
    },
    {
      name: 'Rio Grande do Sul',
      cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 'Gravataí', 'Viamão', 'Novo Hamburgo', 'São Leopoldo', 'Rio Grande', 'Alvorada', 'Passo Fundo', 'Sapucaia do Sul', 'Uruguaiana', 'Santa Cruz do Sul']
    },
    {
      name: 'Rondônia',
      cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal', 'Rolim de Moura', 'Jaru', 'Guajará-Mirim', 'Pimenta Bueno', 'Ouro Preto do Oeste', 'Buritis', 'Nova Mamoré', 'Machadinho d\'Oeste', 'Alta Floresta d\'Oeste', 'Espigão d\'Oeste']
    },
    {
      name: 'Roraima',
      cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Pacaraima', 'Alto Alegre', 'Mucajaí', 'Cantá', 'Bonfim', 'São João da Baliza', 'São Luiz', 'Caroebe', 'Amajari', 'Iracema', 'Normandia', 'Uiramutã']
    },
    {
      name: 'Santa Catarina',
      cities: ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Criciúma', 'Chapecó', 'Itajaí', 'Lages', 'Jaraguá do Sul', 'Palhoça', 'Balneário Camboriú', 'Brusque', 'Tubarão', 'São Bento do Sul', 'Caçador']
    },
    {
      name: 'São Paulo',
      cities: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André', 'Osasco', 'São José dos Campos', 'Ribeirão Preto', 'Sorocaba', 'Santos', 'Mauá', 'São José do Rio Preto', 'Mogi das Cruzes', 'Diadema', 'Jundiaí']
    },
    {
      name: 'Sergipe',
      cities: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão', 'Estância', 'Tobias Barreto', 'Capela', 'Simão Dias', 'Laranjeiras', 'Itabaianinha', 'Nossa Senhora da Glória', 'Propriá', 'Poço Redondo', 'Canindé de São Francisco']
    },
    {
      name: 'Tocantins',
      cities: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins', 'Colinas do Tocantins', 'Guaraí', 'Tocantinópolis', 'Miracema do Tocantins', 'Dianópolis', 'Formoso do Araguaia', 'Araguatins', 'Xambioá', 'Pedro Afonso', 'Augustinópolis']
    }
  ],
  en: [
    {
      name: 'California',
      cities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Irvine', 'San Bernardino', 'Fresno', 'Palm Springs']
    },
    {
      name: 'New York',
      cities: ['New York City', 'Buffalo', 'Rochester', 'Syracuse', 'Albany', 'Yonkers', 'White Plains', 'Utica', 'Binghamton', 'Ithaca', 'Poughkeepsie', 'Schenectady', 'Niagara Falls', 'Saratoga Springs', 'Kingston']
    },
    {
      name: 'Texas',
      cities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock', 'Irving', 'Amarillo', 'Galveston', 'McAllen', 'Waco']
    },
    {
      name: 'Florida',
      cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'St. Petersburg', 'Tallahassee', 'West Palm Beach', 'Gainesville', 'Clearwater', 'Daytona Beach', 'Fort Myers', 'Pensacola', 'Key West', 'Sarasota']
    },
    {
      name: 'Illinois',
      cities: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Peoria', 'Elgin', 'Waukegan', 'Champaign', 'Bloomington', 'Decatur', 'Evanston', 'DeKalb', 'Urbana']
    },
    {
      name: 'Pennsylvania',
      cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg', 'Altoona', 'York', 'State College', 'Wilkes-Barre', 'Chester', 'Easton']
    },
    {
      name: 'Ohio',
      cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Springfield', 'Kettering', 'Elyria', 'Mansfield']
    },
    {
      name: 'Michigan',
      cities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn', 'Livonia', 'Westland', 'Troy', 'Farmington Hills', 'Kalamazoo', 'Wyoming', 'Rochester Hills']
    },
    {
      name: 'Massachusetts',
      cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'Quincy', 'Lynn', 'New Bedford', 'Fall River', 'Newton', 'Lawrence', 'Somerville', 'Waltham', 'Haverhill']
    },
    {
      name: 'Washington',
      cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Yakima', 'Federal Way', 'Bellingham', 'Kennewick', 'Auburn', 'Pasco', 'Marysville']
    }
  ],
  es: [
    {
      name: 'Madrid',
      cities: ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Leganés', 'Getafe', 'Alcorcón', 'Torrejón de Ardoz', 'Parla', 'Alcobendas', 'Las Rozas', 'San Sebastián de los Reyes', 'Pozuelo de Alarcón', 'Rivas-Vaciamadrid', 'Majadahonda']
    },
    {
      name: 'Cataluña',
      cities: ['Barcelona', 'Hospitalet de Llobregat', 'Terrassa', 'Badalona', 'Sabadell', 'Lleida', 'Tarragona', 'Mataró', 'Santa Coloma de Gramenet', 'Reus', 'Girona', 'Cornellà de Llobregat', 'Sant Cugat del Vallès', 'Sant Boi de Llobregat', 'Manresa']
    },
    {
      name: 'Andalucía',
      cities: ['Sevilla', 'Málaga', 'Córdoba', 'Granada', 'Jerez de la Frontera', 'Almería', 'Huelva', 'Cádiz', 'Jaén', 'Dos Hermanas', 'Algeciras', 'Marbella', 'Torremolinos', 'El Puerto de Santa María', 'Fuengirola']
    },
    {
      name: 'Comunidad Valenciana',
      cities: ['Valencia', 'Alicante', 'Elche', 'Castellón de la Plana', 'Torrevieja', 'Orihuela', 'Gandia', 'Benidorm', 'Paterna', 'Sagunto', 'Alcoy', 'San Vicente del Raspeig', 'Elda', 'Vila-real', 'Torrent']
    },
    {
      name: 'País Vasco',
      cities: ['Bilbao', 'Vitoria-Gasteiz', 'San Sebastián', 'Barakaldo', 'Getxo', 'Irun', 'Portugalete', 'Santurtzi', 'Basauri', 'Errenteria', 'Leioa', 'Galdakao', 'Sestao', 'Durango', 'Eibar']
    },
    {
      name: 'Galicia',
      cities: ['Vigo', 'A Coruña', 'Ourense', 'Lugo', 'Santiago de Compostela', 'Pontevedra', 'Ferrol', 'Narón', 'Vilagarcía de Arousa', 'Oleiros', 'Arteixo', 'Carballo', 'Redondela', 'Culleredo', 'Ribeira']
    },
    {
      name: 'Castilla y León',
      cities: ['Valladolid', 'Burgos', 'Salamanca', 'León', 'Palencia', 'Ponferrada', 'Zamora', 'Ávila', 'Segovia', 'Soria', 'Miranda de Ebro', 'Aranda de Duero', 'Medina del Campo', 'San Andrés del Rabanedo', 'Laguna de Duero']
    },
    {
      name: 'Islas Canarias',
      cities: ['Las Palmas de Gran Canaria', 'Santa Cruz de Tenerife', 'La Laguna', 'Telde', 'Arona', 'Santa Lucía de Tirajana', 'Adeje', 'Arrecife', 'La Orotava', 'Puerto del Rosario', 'Granadilla de Abona', 'Los Realejos', 'San Bartolomé de Tirajana', 'Ingenio', 'Tacoronte']
    },
    {
      name: 'Islas Baleares',
      cities: ['Palma de Mallorca', 'Calvià', 'Ibiza', 'Manacor', 'Santa Eulària des Riu', 'Llucmajor', 'Marratxí', 'Inca', 'Sant Josep de sa Talaia', 'Sant Antoni de Portmany', 'Ciutadella de Menorca', 'Maó', 'Alcúdia', 'Felanitx', 'Pollença']
    },
    {
      name: 'Aragón',
      cities: ['Zaragoza', 'Huesca', 'Teruel', 'Calatayud', 'Utebo', 'Monzón', 'Barbastro', 'Ejea de los Caballeros', 'Alcañiz', 'Fraga', 'Jaca', 'Cuarte de Huerva', 'Tarazona', 'Sabiñánigo', 'Caspe']
    }
  ]
};

export function getDefaultStates(language: string = 'pt_br'): State[] {
  return defaultStates[language as keyof typeof defaultStates] || defaultStates.pt_br;
} 