//at
const scores= [5,6,7];
console.log(scores.at(1));

//get last element
console.log(scores.at(-1))
//concat
function func(){
    var num1 = [11,12,13],
    num2= [14,15,16],
    num3= [17,18,19];
    console.log(num1.concat(num2,num3));
}
func();

//constructor
const fruits = new Array("Apple", "Banana");

console.log(fruits.length);
console.log(fruits[0]);

//CopyWithin
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.copyWithin(2,0,2));

//entries
var totn_array = ['Tech','On','The','Net'];

var totn_iterator = totn_array.entries();

console.log(totn_iterator.next().value);
console.log(totn_iterator.next().value);
console.log(totn_iterator.next().value);
console.log(totn_iterator.next().value);

//every

const myArray= [1,2,3];
const myArray2=[4,5,6];

const areEvery= myArray.every(x => x < 4)
console.log(areEvery)

//fill
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

//filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//find
const array11 = [5, 12, 8, 130, 44];

const found = array11.find(element => element > 10);

console.log(found);

//findLast
const myArrayy = [1,2,3];
const myArray2s= [4,5,6];
const last = myArrayy.findLast(x => x <2)
console.log(last)


//findLastIndex
const array12 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array12.findLastIndex(isLargeNumber));

//flat
const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);

//flatMap
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);

//forEach
let numeros = [3, 6, 8, 10, 12]
let impar = 3;

numeros.forEach(function(numero) {
    if (numero === impar) {
        numeros.shift() // 3 será borrado del arreglo
    }
})

console.log(numeros);


//includes

const array13 = [1, 2, 3];

console.log(array13.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));

//indexOf
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let index = fruitss.indexOf("Apple");
console.log(index)

//join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

//keys

const array = ['a', 'b', 'c'];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

//lastIdexOf
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));


//map
const arrayy = [1, 4, 9, 16];

// Pass a function to map
const map1 = arrayy.map(x => x * 2);

console.log(map1);

//pop
const array4=[1,2,3];
const array5 =[4,5,6];

array4.push(4)
console.log(array4)


//push
const array0=[1,2,3];
const array9 =[4,5,6];

const lastItem= array0.pop()
console.log(lastItem)

//reduce

const num = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
//reduceRight

const num1 = [[0, 1], [2, 3], [4, 5]];

const result1 = num1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result1);
//reverse

const arrayy1 = ['one', 'two', 'three'];
console.log('array1:', arrayy1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = arrayy1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', arrayy1);
// Expected output: "array1:" Array ["three", "two", "one"]


//shift


var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log('Elemento eliminado: ' + eliminado);
// "Elemento eliminado: ángel"

//slice

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);
console.log(masculinos)
//some

const numm = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(numm.some(even));
// Expected output: true

//sort

var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']

//splice

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//toLocaleString

const array17 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array17.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


//toString

Perro.prototype.toString = function perroToString() {
    var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
    return retorno;
  }

//unshift

const array19 = [1, 2, 3];

console.log(array19.unshift(4, 5));
// Expected output: 5

console.log(array19);
// Expected output: Array [4, 5, 1, 2, 3]

//values
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]
  








