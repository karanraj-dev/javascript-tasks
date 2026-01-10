
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  display(){
    console.log(`Hi this is ${this.name} and i am ${this.age} years old`)
  }
}

const person1 = new Person("karanraj", 26);
console.log(person1.display());

class Person1{
  static value = 10;

  display(){
    console.log(`Hi this is ${Person1.value}`)
  }

}
const person2 = new Person1;
console.log(person2.display());


const cards = ["k","Q",3,7,5,8];

shuffleCards(cards);

function shuffleCards(arr){
  for(let i = arr.length-1; i > 0; i--){
    let random = Math.floor(Math.random()*arr.length+1);
    console.log("arr[i]",arr[i]);
     console.log("arr[random]",arr[random]);
     [arr[i],arr[random]] = [arr[random],arr[i]];
  }
}
console.log(cards);


const shuffleArr = [1,2,3,4,5,6,7,8,9,0];

function shuffle(arr){
  for(let i = arr.length-1; i > 0; i--){
    let random = Math.floor(Math.random() * i);
    [arr[i],arr[random]] = [arr[random],arr[i]];
  }
  return arr
}
console.log(shuffle(shuffleArr));
 


