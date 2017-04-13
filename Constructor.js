/**
 * Created by esteb on 4/8/2017.
 */
console.log("construct working")
var requireBasic = require("./BasicCard.json")
var requireCloze = require("./ClozeCard.json")
var fs = require("fs")
var obj = {}
var BasicCard =  function (front, back, type) {
    this.front = front,
    this.back = back,
    this.type = type
    this.CreateCard = function () {
        var card = {
            front: front,
            back: back,
            type: type
        }
        console.log(card.type)
        putIt(card)
    }
    function putIt(card) {
        var format = card.type
        if (format === 'Basic') {
            fs.readFile("./BasicCard.json", 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    obj.cards.push(card);
                    completedArray = JSON.stringify(obj, null, 4);
                    fs.writeFile('./BasicCard.json', completedArray, 'utf8');
                }
            });
        }
        else {
            fs.readFile("./ClozeCard.json", 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    obj.cards.push(card);
                    completedArray = JSON.stringify(obj, null, 4);
                    fs.writeFile('./ClozeCard.json', completedArray, 'utf8');
                }
            });
        }
    }
}
module.exports = BasicCard
BasicCard()

