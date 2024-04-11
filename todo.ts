#! /usr/bin/env node

import inquirer from "inquirer";
let todo =[];
let condition =true

while (condition){
 let add_item = await inquirer.prompt([
    {
     name: "todo",type: "input",message:"What do you want to add in your grocery list"
    },

    {
     name:"confirm",type:"confirm",message:"Do you want to add more items?",default:"false"
    }   
]);
  todo.push(add_item.todo);
 condition=add_item.confirm;
 console.log(todo);
}