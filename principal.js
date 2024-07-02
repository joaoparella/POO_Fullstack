const Usuario = require('./Usuario.js')
const EntradaSaida = new (require('./EntradaSaida.js'))()


const usuarioJoao = new Usuario("joao", "joao@teste.com", "123");

const usuarioRoberto = new Usuario("Roberto","roberto@gmail.com","12999")


usuarioRoberto.adicionarAssinatura(100)
usuarioRoberto.nome = "Roberto silva"

var email = EntradaSaida.entrada("Digite um email")
var senha = EntradaSaida.entrada("Digite uma senha")

var resultado = usuarioJoao.fazerLogin(email,senha)

EntradaSaida.mensagemCompleta(resultado)

EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())

usuarioJoao.adicionarAssinatura(10)
EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())

usuarioJoao.adicionarAssinatura(30)
EntradaSaida.mensagemCompleta(usuarioJoao.validarAssinatura())