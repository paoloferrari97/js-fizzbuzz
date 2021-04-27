/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */


var message = "";
for (var i = 1; i <= 100; i++){

    //risolvo l'esercizio con if e else if
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        message += "FizzBuzz" + ", ";
    } else if (i % 3 == 0) {
        console.log("Fizz");
        message += "Fizz" + ", ";
    } else if (i % 5 == 0) {
        console.log("Buzz");
        message += "Buzz" + ", ";
    } else {
        console.log(i);
        message += i + ", ";
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