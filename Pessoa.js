export class Pessoa{
    #anoNascimento
    constructor(nome,anoNascimento,nacionalidade,corPreferida){
        this.nome = nome;
        this.#anoNascimento = anoNascimento;
        this.nacionalidade = nacionalidade;
        this.corPreferida = corPreferida;
    }

    get Idade(){
        return 2024 - this.#anoNascimento
    }
}