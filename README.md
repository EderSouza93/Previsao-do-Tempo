# Previsão do Tempo

Um aplicativo web simples para consultar a previsão do tempo da sua localização atual ou de qualquer cidade. O projeto utiliza a API do OpenWeather para obter dados meteorológicos em tempo real.

## Funcionalidades

- Detecção automática da localização do usuário
- Busca de previsão do tempo por cidade
- Exibição de:
  - Temperatura atual
  - Temperatura mínima e máxima
  - Descrição do clima
  - Sensação térmica
  - Umidade do ar
  - Ícone representativo das condições climáticas

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- API OpenWeather
- Google Fonts (Open Sans)

## Como Usar

1. Clone este repositório para sua máquina local
2. Abra o arquivo `index.html` em seu navegador
3. Permita o acesso à sua localização quando solicitado pelo navegador
4. Para buscar outras cidades, digite o nome da cidade no campo de busca e clique no ícone de pesquisa

## Configuração da API

O projeto utiliza a API do OpenWeather. Para executar o projeto, você precisará:

1. Se cadastrar no [OpenWeather](https://openweathermap.org/)
2. Obter sua chave de API
3. Substituir a constante `key` no arquivo `scripts.js` com sua chave de API:
```javascript
const key = "sua-chave-aqui"
```

## Estrutura do Projeto

```
previsao-do-tempo/
│
├── index.html
├── styles.css
└── scripts.js
```

## Aprendizados

Este projeto foi desenvolvido durante meus estudos iniciais de desenvolvimento web e inclui conceitos como:
- Manipulação do DOM
- Consumo de APIs
- Geolocalização
- Estilização CSS
- JavaScript assíncrono (async/await)

## Contribuição

Este é um projeto de estudo, mas sugestões são sempre bem-vindas! Sinta-se à vontade para criar um fork do projeto e enviar suas contribuições através de pull requests.
