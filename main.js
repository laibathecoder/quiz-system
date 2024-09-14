#! /usr/bin/env node
//Quiz System
import inquirer from "inquirer";
console.log("         WELCOME TO MY QUIZ GAME         ");
console.log("You required to gain maximim 5 (five) points to win the game :)");
let score = 0;
let Que1 = await inquirer.prompt([
    {
        name: "first",
        message: "TypeScripe is the superset of?",
        type: "list",
        choices: [
            "1 : Python",
            "2 : Java",
            "3 : JavaScript",
            "4 : HTML",
            "5 : C++"
        ]
    }
]);
if (Que1.first === "3 : JavaScript") {
    console.log("Correct Answer :)");
    score++;
}
else {
    console.log("Wrong Answer :(");
}
let Que2 = await inquirer.prompt([
    {
        name: "second",
        message: "Who is the founder of Microsoft ?",
        type: "list",
        choices: [
            "1 : Elon Mask",
            "2 : Bill Gates",
            "3 : Einstien",
            "4 : Quida-e-azam"
        ]
    }
]);
if (Que2.second === "2 : Bill Gates") {
    console.log("Correct Answer :)");
    score++;
}
else {
    console.log("Wrong Answer :(");
}
let Que3 = await inquirer.prompt([
    {
        name: "third",
        message: "What is the main resource to stop golbel warming ?",
        type: "list",
        choices: [
            "1 : Use fossil fuel",
            "2 : Reducing more carbondioxide",
            "3 : Plainting more TREES",
            "4 : Burning waste"
        ]
    }
]);
if (Que3.third === "3 : Plainting more TREES") {
    console.log("Correct Answer :)");
    score++;
}
else {
    console.log("Wrong Answer :(");
}
let Que4 = await inquirer.prompt([
    {
        name: "forth",
        message: "AI(Artificial Intelligence) is exist?",
        type: "list",
        choices: [
            "1 : Just in Madical",
            "2 : In All fields",
            "3 : Just in IT(Information Techonology)",
            "4 : Its not exist"
        ]
    }
]);
if (Que4.forth === "2 : In All fields") {
    console.log("Correct Answer :)");
    score++;
}
else {
    console.log("Wrong Answer :(");
}
let Que5 = await inquirer.prompt([
    {
        name: "fifth",
        message: "Dark wab is the unsecure side of ?",
        type: "list",
        choices: [
            "1 : Natural world",
            "2 : Internet",
            "3 : Visual world",
            "4 : Software world"
        ]
    }
]);
if (Que5.fifth === "2 : Internet") {
    console.log("Correct Answer :)");
    score++;
}
else {
    console.log("Wrong Answer :(");
}
if (score >= 5) {
    console.log("***Congratulations YOU WIN :)***");
    console.log(`YOUR SCORE IS : ${score}`);
}
else {
    console.log(":( YOU LOSS...Try Again");
    console.log(`YOUR SCORE ${score}`);
}
