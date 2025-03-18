//Variabili
let num=parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
let odd= 'Fizz';
let even='Buzz';
let oddEven=' ';
//Corpo programma
for(let i=1; i<=100; i++){
    if(i % 3 == 0 ){
         console.log(odd);
    }

    else if(i % 5 == 0){
        console.log(even);
    }
       
  
}
console.log(num);