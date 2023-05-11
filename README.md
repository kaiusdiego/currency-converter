# currency-converter
## @kaiusdiego


currency-converter is a small app that, in addition to the normal operations of a crud, also converts values from a base currency (eg: iso_code=BRL) to one or more currencies.


## Resources

- Conversion of values between quotations
- Creating a quotation
- Updating a quotation
- Deleting a quotation

## Languages and technologies
<p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


## Running the project

currency-converter is easily started, just run the command:

```sh
docker-compose up 
```

Therefore:
#### currency-converter:

```sh
http://localhost:3000
```

### Running tests with Jest

After running the container, it's possible execute the tests through the command as follow:

##### currency-converter tests:

```sh
docker container exec -it currency-converter-kaius-app npm run test
```


## Documentation (full)

In order to accesss the full documentation it's necessary init the application and execute the command bellow:

```sh


docker container exec -it currency-converter-kaius-app npm run start:doc
```
And access the link: 

```sh
http://localhost:3001/
```




## Documentation (short version)


### Convert values

#### Return the conversion of all registered quotations to the requested value

```http
  GET /currencies/iso_code/price
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `iso_code` | `string` | **Required**. iso_code quotation, ex: USD |
| `price` | `number` | **Required**. Value to be converted |


#### Sample return
```
[
  {
    "iso_code": "USD",
    "price": 19.607843137254903
  }
]
```
 

### Creating a new quotation

#### Return the registered quotation

```http
  POST /currencies/
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `iso_code_from` | `string` | **Required**. iso_code quotation, ex: USD |
| `iso_code_to` | `string` | **Required**. iso_code quotation, ex: BRL|
| `quotation` | `number` | **Required**. quotation value |



#### Return
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
 

 
 
