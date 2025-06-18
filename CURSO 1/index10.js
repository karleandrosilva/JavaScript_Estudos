// estrtura condicional switch

/* switch (o valor) {
    case "esperado": {
        // código a executar se o valor for "esperado"
        break; 
    }     
} */

// quando espera varios casos diferentes

let animal = "cachorro";

console.log("O animal é: " + animal + "E o som que ele faz é: ");

switch (animal) {
    case "gato": {
        console.log("miau");
        break; // serve para sair do switch, vai para o final do switch
    }
    case "cachorro": {
        console.log("au au");
        break;
    }
    case "vaca": {
        console.log("moo");
        break; 
    }
    case "galinha": {
        console.log("cocorico");
        break; 
    }
    case "pato": {
        console.log("quack");
        break; 
    }
}