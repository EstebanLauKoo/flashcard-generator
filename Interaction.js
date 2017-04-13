/**
 * Created by esteb on 4/10/2017.
 */
var inquirer = require("inquirer")
var constructor = require("./Constructor.js")
var fs = require("fs")

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
                name: 'Play 3 basic cards'
            },
            {
                name: "Play 3 cloze cards"
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
                        message: "What is the back of the card?"
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
                        message: "What is the cloze?"
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
            else if (command === "Play 3 basic cards") {

                fs.readFile("BasicCard.json",  function(err, obj) {
                    var array = JSON.parse(obj)
                    console.log(array)
                    var random = array.cards.sort(function(stuff) {
                        return .5 - Math.random();
                    })
                    random = random.slice(0, 3)
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "user",
                            message: random[0].front
                        }
                        ])
                .then(function (answer) {
                                var i = 0
                                if (random[i].back === answer.user) {
                                    console.log("You are correct!")
                                }
                                else {
                                    console.log("You are wrong. The right answer was: " + random[i].back)
                                }
                                console.log(i)
                                inquirer.prompt([
                                    {
                                        type: "input",
                                        name: "user",
                                        message: random[1].front
                                    }
                                ]).then(function (answer) {
                                    var i = 1
                                    if (random[i].back === answer.user) {
                                        console.log("You are correct!")
                                    }
                                    else {
                                        console.log("You are wrong. The right answer was: " + random[i].back)
                                    }
                                    inquirer.prompt([
                                        {
                                            type: "input",
                                            name: "user",
                                            message: random[2].front
                                        }
                                    ]).then(function (answer) {
                                        var i = 2
                                        if (random[i].back === answer.user) {
                                            console.log("You are correct!")
                                        }
                                        else {
                                            console.log("You are wrong. The right answer was: " + random[i].back)
                                        }
                                    })
                                })
                            })
                })
            }

            else if (command === "Play 3 cloze cards") {
                fs.readFile("ClozeCard.json",  function(err, obj) {
                    var array = JSON.parse(obj)
                    console.log(array)
                    var random = array.cards.sort(function(stuff) {
                        return .5 - Math.random();
                    })
                    random = random.slice(0, 3)
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "user",
                            message: random[0].front.replace(random[0].back, "...")
                        }
                    ])
                        .then(function (answer) {
                            var i = 0
                            if (random[i].back === answer.user) {
                                console.log("You are correct!")
                            }
                            else {
                                console.log("You are wrong. The right answer was: " + random[i].back)
                            }
                            console.log(i)
                            inquirer.prompt([
                                {
                                    type: "input",
                                    name: "user",
                                    message: random[1].front.replace(random[1].back, "...")
                                }
                            ]).then(function (answer) {
                                var i = 1
                                if (random[i].back === answer.user) {
                                    console.log("You are correct!")
                                }
                                else {
                                    console.log("You are wrong. The right answer was: " + random[i].back)
                                }
                                inquirer.prompt([
                                    {
                                        type: "input",
                                        name: "user",
                                        message: random[2].front
                                    }
                                ]).then(function (answer) {
                                    var i = 2
                                    if (random[i].back === answer.user) {
                                        console.log("You are correct!")
                                    }
                                    else {
                                        console.log("You are wrong. The right answer was: " + random[i].back)
                                    }
                                })
                            })
                        })
                })
            }
            else if (command === 'Exit') {
                console.log("SEE YOU LATER!")
            }

        })
}
MainMenu()

