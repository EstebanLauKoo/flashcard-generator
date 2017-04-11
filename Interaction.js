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
                name: "Add Cloze card"
            },
            {
                name: 'Play all basic Cards'
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
            //console.log(command) (works)
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
                    console.log("Front: " + front, "Back: " + back)
                    var basic = new constructor.BasicCard(front, back)

                })
            }

        })
}
MainMenu()

