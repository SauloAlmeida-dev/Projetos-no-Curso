const api = await fetch ("https://randomuser.me/api/?results=300")

const dados = await api.json();

const users = dados.results;

users.forEach((user) => console.log("Olá " + user.name.title, user.name.first ));

// const api = await fetch("https://randomuser.me/api/?results=10"); = fetch = busque para mim 
// randomuser.me/api/?results=300 = 300 usuarios aleatorios 
// ele vai pegar este dados e vai salvar em api 

// await serve para parar o codigo até uma resposta chegar 
// api.json() .json(); é o ato de transformar os dados que chegaram e transforma-los em um objeto JS
// novamente o await para o codigo para que o dados sejam transformados entre aspas 
// agora já com os dados prontos eles são guardados em dados e já podem ser utilizados 
