const editJsonFile = require("edit-json-file");
const fs = require('fs');
// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`${__dirname}/1.json`);
// Output the content
//console.log(file.get("transcript"));
const data =file.get("transcript");
//console.log(data);
//console.log(file.get("transcript.speaker"));


const filterCombiner = (d, filterArray) => {
  for (let fn of filterArray) {
    if (!fn(d)) {
      return false;
    }
  }
  return true;
}


const filterArray1 = [
  d =>(d.speaker === 'S12' || d.speaker === 'S0'),
];
const arr1 = data.filter(d => filterCombiner(d, filterArray1));
//console.log('arr1', arr1);


console.log('-------------');

const filterArray2 = [
  d => (d.speaker === 'S18'),
];
const arr2 = data.filter(d => filterCombiner(d, filterArray2));
//console.log('arr2', arr2);



var obj1 = JSON.stringify(arr1);
var obj2 = JSON.stringify(arr2);
//console.log(obj2);





var obj1 = JSON.stringify(arr1);
var obj2 = JSON.stringify(arr2);
//console.log(obj2);


//////// output section ///////

fs.writeFile('./first.json', obj1, err => {
    if (err) {
        console.log('Error writing first file', err)
    } else {
        console.log('Successfully wrote first file')
    }
})

fs.writeFile('./second.json',obj2, err => {
    if (err) {
        console.log('Error writing second file', err)
    } else {
        console.log('Successfully wrote second file')
    }
})







