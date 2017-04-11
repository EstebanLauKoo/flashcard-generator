var basicStorage = require("./BasicCard.json")
var clozeStorage = require('./ClozeCard.json')
function BasicCard(front, back) {
        this.front = front,
        this.back = back
}
BasicCard.prototype.print = function () {
    console.log("Front: " + this.front + " Back: " + this.back)
}
var textBasic = new BasicCard("This is front", "This is back")
textBasic.print()
function ClozeCard(text, cloze) {
    this.text = text,
    this.cloze = cloze
}
ClozeCard.prototype.print = function () {
    console.log("Text: " + this.text + " Cloze: " + this.cloze)
}

ClozeCard.prototype.partial = function () {
    var text= this.text
    console.log(text.replace(this.cloze, "..."))
    //replaceAll requires jquery?
}
var textCloze = new ClozeCard("This is text", "This")
textCloze.print()
textCloze.partial()
clozeStorage.push(textCloze)