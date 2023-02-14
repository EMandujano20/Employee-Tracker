const mysql= require('mysql2');
const inquirer= require('inquirer');

function mainMenu (){
    inquirer.prompt({
        type: "list",
        message: "What would you like to do",
        name: "menu",
        choices: [
            "view all departments",
            "veiw all roles",
            "veiw all employees",
            "add a department", 
            "add a role", 
            "add an employee",
            "update an employee role",            
        ]
    }) .then(answer =>{
if(answer.menu=== "view all deparments"){
    viewDepartments()
}
if(answer.menu=== "view all roles"){
    veiwRoles()
}
if(answer.menu=== "view all employees"){
    veiwEmployees()
}
if(answer.menu=== "add a department"){
    veiw()
}
    })
}   