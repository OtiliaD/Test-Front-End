//1
/*function findLongestWord(str) {
    var arrayOfStrings= str.split(" ");
    var longestString = ' ';
    for (var i=0; i<arrayOfStrings.length; i++){
      if (longestString.length < arrayOfStrings[i].length){
        longestString = arrayOfStrings[i];
      }
    }
    return longestString;
  }
  
  console.log(findLongestWord("Find the longest word from this string"));*/

//2
/*function countStar(){
  for(var i = 0; i < 5; i++){   
    var output="";  
    for(var j = 0; j <= i; j++){  
        output +="*";    
    }   
    console.log(output);
}
}
console.log(countStar());*/

//4
/*function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var sortStr1 = str1
    .split("")
    .sort()
    .join("");
  var sortStr2 = str2
    .split("")
    .sort()
    .join("");
  return sortStr1 === sortStr2;
}

console.log(isAnagram("rail safety", "fairy tales"));*/

//5
/*function removeDups(str) {
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) == -1) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(removeDups("gggkkkkrfty"));
console.log(removeDups("1999555784122"));*/

//6
/*function fibonacciSeries(n) {
  {
    if (n === 1) {
      return [0, 1];
    } else {
      var s = fibonacciSeries(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
}
console.log(fibonacciSeries(7));
console.log(fibonacciSeries(9));*/

//7
/*function numToSqr(num) {
  var i,
    sqr = [],
    n;
  num = num.toString();
  for (i = 0; i < num.length; i++) {
    n = Number(num[i]);
    sqr.push(n * n);
  }
  return Number(sqr.join(""));
}

console.log(numToSqr(943));
console.log(numToSqr(12));
console.log(numToSqr(682));*/

//8
/*function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
const add5 = makeAdder(5);

console.log(add3(10));
console.log(add3(5));
console.log(add5(10));*/

//9 Nu l-am terminat, cred ca m-am pierdut un pic in cerinta 
/*function buildFun(n){
  var arr = [];
  for(i = 0; i <= n; i++){
    arr.push(i);
  }
  console.log(arr);
}
console.log(typeof buildFun(100));*/
