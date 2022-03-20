export class cliente{
    nome; 
    _cpf;

    get _cpf(){
       return  this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
  
}