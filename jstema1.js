var result;
var degrees = Number(prompt('Please input number of grades:'));
var unit = prompt('Please input measure unit. For Celsius c or for Fahrenheit f:');

if(unit == 'c' || unit == 'C'){
result = degrees * 9/5 + 32;
alert("The temprature in Fahrenheit degrees is: "+result);
}
 else if(unit === 'f' || unit === 'F'){
    result = (degrees - 32) * 5/9;
    alert("The temprature in Celsius degrees is: "+result);
    }
 else
 alert('Invalid measure unit');




/*var a = prompt('Please input a value for the first number:');
var b = prompt('Please input a value for the second number:');
var divisor = 2;
var greatest = 1;
if (a < 2 || b <2)
console.log(1)
while (a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
        cmmdc = divisor;
    }
    divisor++;
}
console.log(cmmdc);*/


/*var number = prompt('please enter number');
var total = 1;
for(i = number; i > 1; i--){
 total = i * total;
}
console.log(total);*/
