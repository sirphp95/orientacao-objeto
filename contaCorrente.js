import { cliente } from "./cliente.js";
export class contaCorrente{
    static numerodeContas = 0;
    agencia;
    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof cliente){

        }
        this._cliente = novoValor;

    };

    get cliente(){
        return this._cliente
    }
    _saldo = 0;

    get saldo(){
        return this._saldo;
    };

    constructor(agencia, cliente){
        this.agencia = agencia 
        this.cliente = cliente 
        contaCorrente.numerodeContas +=1;
    }

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        else (console.log("voce nao tem saldo suficiente"))
       
    }

    depositar(valor){
        if(valor <=0) return;
        
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}