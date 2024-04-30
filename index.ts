#! /usr/bin/env node
import inquirer from "inquirer";
const computerNumber=Math.floor(Math.random()*10+1);
const result=await inquirer.prompt([
{
    name:"guessinggame",
    type:"number",
    message:"please guess a number between 1-10",
},
]);

if(result.guessinggame===computerNumber){
    console.log("congratulation you guess a right number")
}else{
    console.log("you guess the wrong number");
}