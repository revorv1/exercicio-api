class Carro {

    Marca 
    Modelo 
    Categoria 
    Ano 
    Quilometragem 
    Valor 
    
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca 
        this.Modelo = modelo 
        this.Categoria = categoria 
        this.Ano = ano 
        this.Quilometragem = quilometragem 
        this.Valor = valor 
    }
}
let carro = new Carro("ferrari", "pagani", "luxo", 2015, 8500, 500000)
let carro1 = new Carro("elantra", "Hyundai", "passeio", 2012, 15000, 34000)
function Get() {

    return fetch("https://apigenerator.dronahq.com/api/6TGmInVL/exercicio")
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }
  async function postData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  postData("https://apigenerator.dronahq.com/api/6TGmInVL/exercicio", carro /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });
  async function putData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  putData("https://apigenerator.dronahq.com/api/6TGmInVL/exercicio/1", carro1 /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });

  async function deleteData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  deleteData("https://apigenerator.dronahq.com/api/6TGmInVL/exercicio/1")
  
    .then((data) => {
  
      console.log(data);  
  
  });
