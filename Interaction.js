/**
 * Created by esteb on 4/10/2017.
 */
var inquirer = require("inquirer")
var constructor = require("./Constructor.js")

function MainMenu() {

    inquirer.prompt([{
        type: 'list',
        name: "command",
        message: 'what is your action',
        choices: [
            {
                name: 'Add Basic Card'
            },
            {
                name: "Add Cloze Card"
            },
            {
                name: 'Play all basic cards'
            },
            {
                name: "Play all cloze cards"
            },
            {
                name: 'Exit'
            }
        ]
    }])
        .then(function (data) {
            var command = data.command
            console.log(command)
            if (command === 'Add Basic Card') {
                inquirer.prompt ([
                    {
                        type: "input",
                        name: "front",
                        message: "What is the front of your card?"
                    },
                    {
                        type: "input",
                        name: "back",
                        message: "what is the back of the card?"
                    }
                ])
                    .then(function (data) {
                    var front = data.front.toString();
                    var back = data.back.toString()
                    var type = "Basic"
                    console.log("Front: " + front, "Back: " + back)
                    var BasicInstance = new constructor(front, back, type)
                        BasicInstance.CreateCard()
                        console.log(BasicInstance)
                        console.log('Card Was Added')
                        setTimeout(MainMenu, 2000)
                })
            }
            else if (command === 'Add Cloze Card') {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "fulltext",
                        message: "What is the fulltext?"
                    },
                    {
                        type: "input",
                        name: "cloze",
                        message: "what is the cloze?"
                    }
                ])
                    .then(function (data) {
                        var front = data.fulltext.toString()
                        var back = data.cloze.toString()
                        var type = "Cloze"
                        console.log("Fulltext: " + front + "Cloze: " + back)
                        var ClozeInstance = new constructor(front, back, type)
                        ClozeInstance.CreateCard()
                        console.log(ClozeInstance)
                        console.log('Card Was Added')
                        setTimeout(MainMenu, 2000)
                    })
            }
            else if (command === "Play all basic cards") {

            }
            else if (command === "Play all cloze cards") {

            }
            else if (command === 'Exit') {
                console.log("SEE YOU LATER!")
            }

        })
}
MainMenu()

