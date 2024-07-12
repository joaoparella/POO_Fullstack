import { Usuario } from './Usuario.js';
import { funcoesES } from './EntradaSaida.js';
import filme from './filme.js';
import serie from './serie.js';
import { Pessoa } from './Pessoa.js';

const EntradaSaida = new funcoesES()

const numeros = [0,0,1 ]

const Series = [new serie("Divertidamente 2",120,"um filme sobre a mente",2024),
                new serie("the boys","the boys",60,"serie sangrenta",2020,1,1)
]

for (var i = 0;i < Series.length; i++){
    EntradaSaida.mensagemCompleta(i +" - "+ Series[i].nomeSerie);
}

var resposta = Number(EntradaSaida.entrada("Digite uma serie para assistir"))
EntradaSaida.mensagemCompleta(Series[resposta].assistir());


// const ator1 = new Pessoa("Arnold aishdoasjdoasjdneger",1950,"austria")
// EntradaSaida.mensagemCompleta("Ator -- nome: "+ator1.nome+" nacionalidade: "+ator1.nacionalidade+" idade:"+ator1.Idade)






// const usuarioJoao = new Usuario("joaoasdasdsad", "joao@teste.com", "123");
// EntradaSaida.mensagemCompleta("Senha antes:"+usuarioJoao.Senha)
// usuarioJoao.Senha = "12345678912349865"
// EntradaSaida.mensagemCompleta("Senha depois:"+usuarioJoao.Senha)






// var email = EntradaSaida.entrada("Digite um email")
// var senha = EntradaSaida.entrada("Digite uma senha")

// var resultado = usuarioJoao.fazerLogin(email,senha)

// if (resultado == "Login efetuado"){
//     EntradaSaida.mensagemCompleta("Bem vindo "+usuarioJoao.nome)
//     do {
//         EntradaSaida.mensagemCompleta("Deseja fazer o que?")
//         var opcao = EntradaSaida.entrada("Digite uma opção(1 - adicionar assinatura / 2 - verificar assinatura / 0 - sair)")
//         switch (opcao) {
//             case '1':
//                 {
//                     var dias = Number(EntradaSaida.entrada("Quantos dias adicionar?"))
//                     usuarioJoao.adicionarAssinatura(dias)
//                 } 
//             case '2':
//                 {
//                     EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())
//                 } 
//             case '0':
//                 EntradaSaida.mensagemCompleta("Obrigado e até mais.");              
//             default:
//                 EntradaSaida.mensagemSimples("Digite uma opção válida");
//         }
//     }while (opcao != 0)
// }