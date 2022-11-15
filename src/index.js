/* Scope */
{
  let x = 2;
}

// console.log(x)

{
  let y = 2;
}

// console.log(y)

/* Reassign a value */
let w = 10
w = 5
//console.log(w)









/* Template strings */

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)

let price = 10;
let fees = 0.25;
let total = `O total do produto é: R$ ${(price + fees)}`;
// console.log(total)









/* immediately invoked function expression ou IIFE */
(function helloWorld(){
    // alert('Hello, world!');
  }
)();

(function (message){
    // alert(message);
  }
)('Hello, world!');










/* Arrow functions */

/* function sum(a) {
  return a + 10;
} */

const sum = a => a + 100;

// console.log(sum(3))


// exemplo com map()
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

/* const newArray = materials.map(
    function showLength(materials) {
        return materials.length
    }
); */

//const newArray = materials.map(material => material.length)
// console.log(newArray)










/* For loop */
for (let numero = 0; numero < 10; numero++) {
  //console.log(numero);
}

const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (let i = 0; i < videoGames.length; i++) {
  //console.log(`O game ${i + 1} é ${videoGames[i]}`);
}









/* Prototypes */
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const marcelo = new Pessoa('Marcelo', 44);

const notebook = {
  cor: 'preta',
  ano: 2022,
  especifications: function(value) {
    return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
  }
}

const dell = {
  marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)

//console.log(dell.especifications(5000))










/* Classes */
const Foo = function(x) {
    this.x = x
}

const foo = new Foo('x')

// console.log(foo)

class Book {
    constructor(title, year, author) {
        this.title = title
        this.year = year
        this.author = author
    }
}

const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')
const harryPotter = new Book('Harry Potter', 1997, 'J. K. Rowling')

let bookList = []

bookList.push(domCasmurro, harryPotter)
//console.log(bookList)

class CopaDoMundo {
    constructor(country, year) {
        this.country = country
        this.year = year
    }

    showChampion(team) {
        return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}`
    }
}

const copa86 = new CopaDoMundo('México', 1986)
const copa70 = new CopaDoMundo('México', 1970)
const champion86 = copa86.showChampion('Argentina')
const champion70 = copa70.showChampion('Brasil')

// console.log(champion86)
// console.log(champion70)









/* Herança */
class Candidates {
  constructor(firstName, surName, cpf) {
    this.firstName = firstName
    this.surName = surName
    this.cpf = cpf
  }
}

class Masc extends Candidates {
  constructor(firstName, surName, cpf, reservista) {
    super(firstName, surName, cpf)
    this.reservista = reservista
  }
}

const candidate1 = new Masc('Marcelo', 'Vasques', 123456789, true)
const candidate2 = new Candidates('Maria', 'Fulana', 456123789)
// console.log(candidate1)












/* Funções de Callback */
function hello(name) {
    console.log(name)
}

function helloUser(callback) {    
  callback('Marcelo')
}

// helloUser(hello)



/* const callback = e => alert('Foi clicado')

window.addEventListener('click', callback) */










/* Promises */
function show() {
  setTimeout(() => {
    console.log('Oi!')
  }, 2000);

  console.log('Até logo!')
}

//show()

/* const minhaPromise = new Promise((resolve, reject) => {  
  let n = 9
  if(n > 10) {
    resolve()
  } else {
    reject()
  }
}) */

/* minhaPromise
.then(result => console.log('resolveu'))
.catch(err => console.log('errou'))
.finally(() => console.log('Finally!')) */


// ---- exemplo ----
/* function showHello() {
  console.log('Hello')
}

function showGoodbye() {
  console.log('Goodbye!')
}

setTimeout(() => {
  showHello()
}, 2000);

setTimeout(() => {  
  showGoodbye()
}, 4000); */


// Promise.all()
const promise1 = new Promise((resolve) => {
  resolve('promise1')
})
const promise2 = new Promise((resolve) => {
  resolve('promise2')
})
const promise3 = new Promise((resolve) => {
  resolve('promise3')
})

/* Promise.all([promise1, promise2, promise3])
.then(res => console.log(res)) */


// Promise.all()
const endpoints = [
 "https://jsonplaceholder.typicode.com/todos/1",
 "https://jsonplaceholder.typicode.com/todos/2",
 "https://jsonplaceholder.typicode.com/todos/3",
 "https://jsonplaceholder.typicode.com/todos/4"
]

//const promises = endpoints.map(url => fetch(url).then(res => res.json()))

/* Promise.all(promises)
.then(body => console.log(body)) */


// fetch()
/* const firstUser = (userId) => {
 let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
 .then(res => res.json())
 .then(data => console.log(data))
} */

// firstUser(1)


/* async/await */

const firstUser = async (userId) => {
 let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
 let resultJSON = await response.json()
 //let data = resultJSON.title
 console.log(resultJSON)
}
//firstUser(1)










/* try/catch */
// https://jsonplaceholder.typicode.com/todos/1
async function user() {
  try {
    let response = await fetch(`https://jslaceholder.typicode.com/todos/1`);
    let data = await response.json()
    console.log(data)
  } catch (error) {
      console.log('error ---->', error)
      throw new Error('Erro no fetch')
  } finally {
    console.log('acabou')
  }
  
}
// user()









/* níveis de try/catch */

const err = new Error()

const x = Error("I was created using a function call!");

// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');

// console.log(err)

class customError {
  constructor(message) {
    this.message = message
  }
}

function function1() {
  console.log('function1 executou')
  try {
    console.log('function1 no try')
    codigoA
  } catch (error) {
    console.log('Erro na function1')
    console.error('Erro na function1', error)
    throw new customError('Erro na function1')
  }
}

// function1()


function function2() {
  console.log('function2 executou')
 try {
    console.log('function2 no try')
    // b
  } catch (error) {
    console.error('erro na function2 -->', error)
    throw new Error(error)
  }
  codigoB
}

function main() {
  console.log('main executou')  
  try {
  function1()
  function2()
  } catch (error) {
    console.error('erro na main -->', error)
  }  
}

// main()









/* rest/spread */

// rest parameters
function getSum(...args) {
  let total = 0
  for(const arg of args) {
    total += arg
  }
  return total
}

// console.log(getSum(2, 3, 5))

// spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4]
// console.log(arr2)

// merge arrays
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const mergeArrays = [...array1, ...array2];
//console.log(mergeArrays)









/* Destructuring */
const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}

const marca = carro.marca
const ano = carro.ano

//const {marca, ano} = carro;

// console.log(marca)
// console.log(ano)


const cliente = {
  nome: 'Marcelo',
  compras: {
    digitais: {
      livros: ['Dom Casmurro', 'O Cortiço'],
      filmes: ['Senhor do Anéis', 'Matrix']
    },
    fisicas: {
      cadernos: ['Caderno']
    }
  }
}

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.filmes);

const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// destructuring arrays
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;
// console.log(primeira)









/* Recursion */
function countDown(number) {
    console.log(number);
    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

// countDown(10);









/* Default parameters */
function say(message='Hi') {
    console.log(message);
}

// say();
// say('Hello')






























setTimeout(() => {
  console.log('setTimeout')
}, 0);

const myPromise = new Promise(resolve => {
  resolve('Promise data')
})
myPromise.then(data => console.log(data))

for(let i = 0; i <= 10000; i++) {
  console.log(i)
}