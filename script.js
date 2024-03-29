const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ['Pas de panique', 'Comment allez-vous?', 'à plus dans le bus']
let score = 0
let gameOver = false

while (!gameOver) {
    let question = prompt('Voulez vous des mots ou des phrases?')
    if (question === 'mot') {
        for (let i = 0; i < 3; i++) {
            let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
            if (motUtilisateur === listeMots[i]) {
                score++

            }
        }
        gameOver = true
    }
    if (question === 'phrase') {
        for (let i = 0; i < 3; i++) {
            let motUtilisateur = prompt('Entrez le mot : ' + listePhrases[i])
            if (motUtilisateur === listePhrases[i]) {
                score++
            }
        }
        gameOver = true
    }

}










