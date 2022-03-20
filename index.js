import { cliente } from "./cliente.js";
import { contaCorrente } from "./contaCorrente.js";
const cliente1 = new cliente("Ricardo", 2223443434344 )
const cliente2= new cliente("Alice", 4345344)


 const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
 
 contaCorrenteRicardo.depositar(500);


const conta2 = new contaCorrente(1002, cliente2);


let valor = 200

contaCorrenteRicardo.transferir(valor, conta2);

//console.log(conta2)

 console.log(contaCorrente.numerodeContas)



