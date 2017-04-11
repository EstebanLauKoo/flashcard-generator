/**
 * Created by esteb on 4/8/2017.
 */
var requireBasic = require("BasicCard.json")
var requireCloze = require("ClozeCard.json")
var BasicCard = function (front, back) {
    this.front = front,
    this.back = back
    this.createbasic = function () {
        var cardBasic = {
            front : front,
            back : back,
        }


    }

    this.push = function (cardBasic) {
        fs.readFile("BasicCard.json", 'utf8', function () {
            
        })
    }
}
this
var ClozeCard = function (fulltext, cloze, partialtext) {
    this.fulltext = fulltext,
    this.cloze = cloze,
    this.partialtext = partialtext

    this.createCloze = function () {
        var cardCloze  = {
            fulltext: fulltext,
            cloze: cloze,
            partialtext: partialtext
        }
    }
}