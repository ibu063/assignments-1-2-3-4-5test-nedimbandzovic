// ************ TASK DESCRIPTION ************

// Process a given array of integers with the following **pipeline**:

/*
 ?      Keep only numbers divisible by 5
 ?      Subtract 2 from each remaining number
 ?      Find their average

 ?      Use tap (or a custom debug function) to log intermediate steps.
*/

// Input array: [3, 7, 8, 10, 15]

// Expected output: *PAY ATTENTION TO THE FORMAT OF THE LOGS AS THOSE ARE TESTED AS WELL*
//* Divisible by 5: [10, 15]  
//* After subtracting 2: [8, 13]  
//* Average: 10.5  

// TODO

// if opted for the tap function, you have the boilerplate code below:
const tap = label => x => {
  // TODO: The tap function should log the label with the value, then return the original value.
};

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// TODO finish the average function below:
const average = arr => 
  
const process = pipe( 
  
);
























// Below this comment any modification is prohibited. 
module.exports = process;