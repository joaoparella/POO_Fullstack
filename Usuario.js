class Usuario{
    constructor (nome,email,senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.assinatura = 0;
    }

    fazerLogin(email, senha){
        if(email == this.email){
            if(senha == this.senha){
                return "Login efetuado"
            }else{
                return "Senha incorreta"
            }
        }else{
            return "email invalido"
        }
    }

    validarAssinatura(){
        return "Voce tem "+this.assinatura+" dias de assinatura"
    }

    adicionarAssinatura(dias){
        this.assinatura = this.assinatura + dias;
    }
}

module.exports = Usuario;