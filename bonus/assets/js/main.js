/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var max = Number(prompt("Inserisci il numero fino al quale vuoi contare!"));
document.getElementById("numero").innerHTML = "Contare fino a " + max;
var message = "";
for (var i = 1; i <= max; i++){

    //risolvo l'esercizio con if e else if
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        message += "FizzBuzz" + "<br>";
    } else if (i % 3 == 0) {
        console.log("Fizz");
        message += "Fizz" + "<br>";
    } else if (i % 5 == 0) {
        console.log("Buzz");
        message += "Buzz" + "<br>";
    } else {
        console.log(i);
        message += i + "<br>";
    }
    
    //risolvo l'esercizio con switch e case
    /* switch (true) {
        case i % 3 == 0 && i % 5 == 0:
            console.log("FizzBuzz");
            break;
        case i % 3 == 0:
            console.log("Fizz");
            break;
        case i % 5 == 0:
            console.log("Buzz");
            break;
        default:
            console.log(i);
    } */
}
document.getElementById("container").innerHTML = message;