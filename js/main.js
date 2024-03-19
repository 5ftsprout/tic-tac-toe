class MakeGame {
    constructor(player, rows, columns){
        this.player = player
        this.boxes = []
        this.rows = rows
        this.columns = columns
    }
    initialize() {
        for (let c=0; c < this.columns.length; c++) {
            for (let r=0; r < this.rows.length; r++) {
                let newDiv = document.createElement('div')
                document.getElementById('grid').appendChild(newDiv)
                newDiv.setAttribute('class', 'box')
                let box = new Box(this.columns[r]+this.rows[c],'')
                this.boxes.push(box)
                }
        }
    }
    play() {
        console.log('play')
        let playerText = document.getElementById('player').innerText
        if (playerText == 'X') {
            this.player = 'O'
            this.innerText = 'X'
            playerText = this.player
        } else {
            this.player = 'X'
            this.innerText = 'O'
            playerText.innerText = this.player
        }
    }
    
}

class Box {
    constructor(boxName, value){
        this.boxName = boxName
        this.value = value
    }
}

let game = new MakeGame
game.initialize(player,'123','ABC')
console.log(game.boxes)
game.boxes.addEventListener('click', this.play)

