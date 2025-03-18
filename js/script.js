//Variabili
let num = "i"
let odd = 'Fizz';
let even = 'Buzz';
let oddEven = 'FizzBuzz';
//Corpo programma + risultato
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(oddEven);
    }
    else if (i % 5 == 0) {
        console.log(even);
    }
    else if (i % 3 == 0) {
        console.log(odd)
    }
    else{
        console.log(i)
    }
}
