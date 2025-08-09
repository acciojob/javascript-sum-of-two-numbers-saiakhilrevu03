let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

let num1 = parseInt(input1);
let num2= parseInt(input2);

if(!isNaN(num1) && !isNaN(num2)){
	alert(`The sum of ${num1} and ${num2} is ${num1+num2}.`)
}else{ 
	 alert("Invalid input. Please enter a valid number.");

}
// Write your code here and print the output using alert function
