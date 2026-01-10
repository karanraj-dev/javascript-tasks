
function largestNum(array){
  let largest = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] > largest){
      largest = array[i];
    }
  }
  return largest;

}

function smallestNumber(array){
  let smallest = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < smallest){
      smallest = array[i];
    }
  }
  return smallest

}

function reverseArray(array){
  let revArr = [];
  for(let i = array.length - 1; i >= 0; i--){
    revArr.push(array[i]);
  }
  return revArr
}

function sumAverage(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  let average = sum / array.length;
  return {
    sum: sum,
    average: average
  }

}

function largestWord(str){
  const strArr = string.split(" ");
  let largestStr = "";
  for(let val of strArr){
    if(val.length > largestStr.length){
      largestStr = val;
    }
  }
  return largestStr
}

function vowelCount(str){
  const vowelArr = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for(let char of str){
    if(vowelArr.includes(char.toLowerCase())){
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount
}

function duplicateArr(array){
  let filtered = [];
  let duplicate = [];
  for(let val of array){
    if(!filtered.includes(val)){
      filtered.push(val);
    } else {
      duplicate.push(val);
    }
  }
  return duplicate, filtered
  
}

function frequencyChar(str){
  let obj = {};
  for(let char of str){
    // if(obj[char] == undefined){
    //   obj[char] = 1;
    // } else {
    //   obj[char] = obj[char] + 1;
    // }
    obj[char] == undefined ? obj[char] = 1 : obj[char] += 1;
  }
  return obj;
}

const arr = [3, 45, 2, 9, 28];
const arr2 = [1,2,2,3,3,4];
const string = "I love JavaScript coding";


// console.log("Frequency of characters:", frequencyChar(string));
// console.log("Dupliacte:", duplicateArr(arr2));
// console.log("vowelCount:", vowelCount(string));
// console.log("largest string:", largestWord(string));
// console.log("largest number:", largestNum(arr));
// console.log("smallest number:", smallestNumber(arr));
// console.log("Reverse Array:", reverseArray(arr));
// console.log("sum:",sumAverage(arr).sum,  "average:",sumAverage(arr).average);


const string2 = "hello have a good day!";

const words = string2.split(" ");


let uppercaseword = [];
for(let i = 0; i < words.length; i++){
  
  const split = words[i].split("");
  let upperword = "";
 for(let j = 0; j < split.length; j++){
    if(j == 0){
      upperword+= split[j].toUpperCase();
    } else {
      upperword+= split[j];
    }
 }
 
 uppercaseword.push(upperword);
 
}
console.log(uppercaseword.join(" "));



