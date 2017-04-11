/**
 * Created by esteb on 4/8/2017.
 */
console.log("construct working")
var requireBasic = require("./BasicCard.json")
var requireCloze = require("./ClozeCard.json")
var interaction = require("./Interaction.js")
function BasicCard (front, back) {
    this.front = front,
    this.back = back
    this.createbasic = function () {
        var cardBasic = {
            front : front,
            back : back,
        }
    }

}
var ClozeCard = function (fulltext, cloze) {
    this.fulltext = fulltext,
    this.cloze = cloze,
    this.partialtext = function () {
    }

    this.createCloze = function () {
        var cardCloze  = {
            fulltext: fulltext,
            cloze: cloze,


        }
    }
}
module.exports = BasicCard
module.exports = ClozeCard

BasicCard()