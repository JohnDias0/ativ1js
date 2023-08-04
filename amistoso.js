class Jogador {
    constructor(nome, camisa, defesa, forca, habilidade) {
        this.nome = nome
        this.numcamisa = camisa
        this.def = defesa
        this.f = forca
        this.habilidade = habilidade

    }
    investida() {
        alert(this.nome + " parte para o ataque.")
    }
    defender() {
        alert(this.nome + " busca defender a investida...")
    }
    lance() {
        alert("De olho no lance, " + this.nome + " corre em disparada contra o campo adversário")
    }
    drible() {
        alert(this.nome + " inicia investida arriscadíssima contra o adversário")
        alert(" Mas que jogada ignorante, meus queridos. Um drible de primeira categoria. É o maior dos maiores, o grande camisa" + this.numcamisa)
    }
    chutar() {
        alert("Camisa número " + this.numcamisa + "bate de" + this.habilidade + ". A torcida vai a loucuraaaa")
        alert("DE OLHO NO LANCEEEEE...")
    }

}
function disputa(Jogador1, Jogador2){
    Jogador2.investida()
    Jogador1.defender()
    if(Jogador1.def > Jogador2.f){
        alert(Jogador1.nome +  " defende a investida. Como água passa ileso pelo ataque de " + Jogador2.nome)
        Jogador1.f += 1
        result = Jogador1.lance()
    }
    if(Jogador1.def < Jogador2.f){
        alert(Jogador1.nome + " perdeeeuuu a bola. Quanta esperteza de " + Jogador2.nome + ", ele conduz a bola com firmeza ao seu time honrando o brasão do time em seu peito!")
        result = Jogador2.lance()
        Jogador2.f += 1
    }
}

function ataque(Jogador1, Goleiro){
    Jogador1.chutar
    if(Jogador1.f < Goleiro.def){
        alert("E o goleiro defende com maestriaaaa. O jogo continuaaa...")
        result =  Goleiro.nome
    }
    if(Jogador1.f > Goleiro.def){
        alert("E É GOOOOOOOLLLLLLLLL DO CAMISA " + Jogador1.numcamisa + " DESSE TIME FIRME NA BATALHA E A TORCIda ESTREMESSE O  ESTÁDIO")
        alert("Acaba a partida com essa obra de arte grandiosa. Mas que gol lindo, senhoras e senhores. Uma boa noite a todos")
        result = Jogador1.nome
    }
}

var nm = window.prompt('Digite o nome do jogador')
var number = parseInt(window.prompt('Digite o número da camisa do seu jogador'))
var habil = window.prompt('Escolha uma habilidade para o seu jogador: ')
var habil = "de chaapaaaa"
var defesa = Math.floor(Math.random() * 10) 
var forca = Math.floor(Math.random() *10)
var choose_pl1
var choose_pl1
if (number === 1){
    alert("Error: Número Indisponível")
    number = parseInt(window.prompt('Digite o número da camisa do seu jogador'))
}
if (number === 10) {
    number2 = 11
}
if (number !== 10){
    number2 = 10
}
let  igor = new Jogador("Iguinho", number2, 2, 6, "de chapaaaaa")
let player = new Jogador(nm, number, defesa, forca, habil)
const Goleiro = new Jogador("Orlando Rivera", 1, 7, 0, 0)
var result
var points 

alert("Inicia-se o jogo.")
choose_pl1 = window.prompt("A bola vai em sua direção e junto dela parte o seu adversário Camisa 10, Iguinho para tentar roubar a bola, digite" + "\n" + "1 - investida" + "\n" + "2 - drible" + "\n" + "3 - defender")
    if(choose_pl1 == 1){
        player.lance()
        igor.investida()
        disputa(player, igor)
    }
    if(choose_pl1 == 2){
        player.drible()
        igor.investida()
        disputa(player, igor)
    }
    if(choose_pl1 == 3){
        player.defender()
        disputa(player, igor)
    }
    for (let index = 0; index < 6; index++) {
        if(result = player.nome){
            player.lance()
            choose_pl1 = window.prompt(player.nome + " invade a área adversária, mas " + igor.nome + " tenta interceptar. Digite" + "\n" + "1 - chutar" + "\n" + "2 - drible" + "\n" + "3 - defender")
            if(choose_pl1 == 1){
                player.chutar()
                ataque(player)                
            }
            if(choose_pl1 == 2){
                player.drible()
                // criar algoritmo para iguinho e fazê-lo ter sua própria decisão
            }
            if(choose_pl1 == 3 ){
                player.defender()
                disputa(player, igor)
                
            }
        }   
        if(result = igor.nome){
            igor.lance()
            choose_pl1 = window.prompt(igor.nome + " invade a área adversária, mas " + player.nome + " tenta interceptar. Digite" + "\n" + "1 - investida" + "\n" + "2 - defender")
            if(choose_pl1 == 1){
                player.chutar()
                ataque(player)
                 
            }
            if(choose_pl1 == 2){
                player.defender()
                disputa(player, igor)
                
            }
            if(choose_pl1 != 1 || choose_pl1 != 2){
                igor.chutar()
                ataque(igor, Goleiro)
                
            }
        }   
    }