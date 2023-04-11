# sbf-converter
## @kaiusdiego


sbf-converter é uma pequena app que além das operações normais de um crud, realiza também a conversão de valores a partir de uma moeda base(ex: iso_code=BRL) para uma ou mais moedas.


## Recursos

- Conversão de valores entre cotações
- Criação de uma cotação
- Atualização de uma cotação
- Exclusão de uma cotação

## Línguagens e tecnologias
<p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


## Rodando o projeto

O sbf-converter é facilmente iniciado, basta executar o comando:

```sh
docker-compose up 
```

Sendo assim:
#### sbf-converter:

```sh
http://localhost:3000
```

### Rodando testes com Jest

Após ter o container rodando, é possível executar os testes através do comando abaixo:

##### Testes sbf-converter:

```sh
docker container exec -it sbf-converter-kaius-app npm run test
```


## Documentação (completa)

Para acessar a documentação completa é necessário iniciar a aplicação pela seção, executar o comando: 
```sh


docker container exec -it sbf-converter-kaius-app npm run start:doc
```
E acessar o endereço:

```sh
http://localhost:3001/
```




## Documentação (versão resumida)


### Converter valores

#### Retorna a conversão de todas as cotações cadastradas para o valor solicitado

```http
  GET /currencies/iso_code/price
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `iso_code` | `string` | **Obrigatório**. iso_code da moeda, ex: BRL |
| `price` | `number` | **Obrigatório**. Valor a ser convertido |


#### Retorno
```
[
  {
    "iso_code": "USD",
    "price": 19.607843137254903
  }
]
```
 

### Criar nova cotação

#### Retorna a cotação criada

```http
  POST /currencies/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `iso_code_from` | `string` | **Obrigatório**. iso_code da moeda, ex: USD |
| `iso_code_to` | `string` | **Obrigatório**. iso_code da moeda, ex: BRL|
| `quotation` | `number` | **Obrigatório**. Valor da cotação |



#### Retorno
```
{
  "id": "b258219b-e2f5-44f1-a0e3-b01312c4515e",
  "iso_code_from": "USD",
  "iso_code_to": "BRL",
  "quotation": 5.1,
  "is_active": true,
  "created_at": "2023-04-10T21:54:20.527Z"
}
```
 

 
 
