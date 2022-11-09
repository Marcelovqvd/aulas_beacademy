/* Scope */
{
  var x = 2;
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


/* immediately invoked function expression ou IIFE */
/* (function helloWorld(){
    alert('Hello, world!');
  }
)(); */

/* (function (message){
    alert(message);
  }
)('Hello, world!'); */


/* For loop */
for (var numero = 0; numero < 10; numero++) {
  //console.log(numero);
}

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  //console.log(`O game ${i + 1} é ${videoGames[i]}`);
}


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

const dcasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')
const harryPotter = new Book('Harry Potter', 1997, 'J. K. Rowling')
//console.log(harryPotter)

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



/* Funções de Callback */
function greeting(name) {
    //console.log(name)
}

function helloUser(callback) {    
    callback('Marcelo')
}

helloUser(greeting)


/* Template strings */

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)

let price = 10;
let fees = 0.25;
let total = `O total do produto é: R$ ${(price + fees)}`;
// console.log(total)


/* Prototypes */
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const marcelo = new Pessoa('Marcelo', 44);

console.log(Pessoa.prototype); // retorna o objeto