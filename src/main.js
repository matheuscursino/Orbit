import axios from 'axios';
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const spinner = createSpinner();

function welcome(){
    figlet('Orbit', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(chalk.blueBright(data))
            ask();
        }
    })

}

welcome();

async function ask(){
    const answers = await inquirer.prompt({
        name: 'input',
        type: 'list',
        message: 'What do you want to do? \n',
        choices: [
            'Create Solana wallet',
            'Exit'
        ],
    });

    return handle(answers.input);
}

async function handle(input){
    if (input === 'Create Solana wallet'){
        createWallet()
    } else {
        process.exit()
    }
}