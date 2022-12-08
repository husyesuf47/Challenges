function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++){
    if(numberOfDivisors(i) == 2){// prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
       sum = sum + i;   
    } 
  }
return sum;
}

let result=sumPrimes(10);
console.log(result);


//Count how many divisors
function numberOfDivisors(n){
  let count=0;
  for(let i=1;i<=n;i++){
    if(n%i==0){
      count++;
    }

  }
  return count;
}