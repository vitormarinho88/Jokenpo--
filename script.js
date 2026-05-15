const resultado = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const GAME_OPTIONS = { ///  ENUM DEIXA O CODIGO MAIS ORGANIZAOD, LEGIVEL E EVITA ERROS DE SINTAXES
    PEDRA: 'Pedra',
    PAPEL: 'Papel',
    TESOURA: 'Tesoura'
}


const playHuman = (humanChoice) => { /// Função sem retorno , Isso é um efeito colateral (side effect)

    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = [
        GAME_OPTIONS.PEDRA,
        GAME_OPTIONS.PAPEL,
        GAME_OPTIONS.TESOURA
    ]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


/*  EXEMPLO COM PARAMETRO DENTRO ()
  
    const playMachine = (choices) => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * choices.lenght)
   
    return choices[randomNumber]
   }
*/


const playTheGame = (human, machine) => {

    console.log(`Humano: ${human} | Máquina: ${machine}`)

    if (human === machine) {
        resultado.innerHTML = '引き分けでした !'
    }
    else if (

        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultado.innerHTML = "Player-プレーヤー"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultado.innerHTML = "Machine-機械"
    }

}

