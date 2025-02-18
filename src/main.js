import axios from 'axios';
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";

const DERIVATION_PATH = "m/44'/501'/0'/0'";

// const spinner = createSpinner();

ask();

async function ask(){
    await figlet('Orbit', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(chalk.blueBright(data))
        }
    })

    const answers = await inquirer.prompt({
        name: 'input',
        type: 'list',
        message: 'What do you want to do? \n',
        choices: [
            'Create Solana wallet',
            'Restore wallet from mnemonic',
            'Exit'
        ],
    });

    return handle(answers.input);
}

async function handle(input){
    if (input === 'Create Solana wallet'){
        console.clear()
        createWallet()
    } else if (input === 'Restore wallet from mnemonic'){
        console.clear()
        restoreWalletAsk()
    } else {
        process.exit()
    }
}

async function createWallet(){
    const mnemonic = bip39.generateMnemonic();

    const seed = await bip39.mnemonicToSeed(mnemonic);
    const derivedSeed = derivePath(DERIVATION_PATH, seed.toString("hex")).key;

    const keypair = Keypair.fromSeed(derivedSeed);

    console.log(chalk.magentaBright("\nAddress:", keypair.publicKey.toBase58(), "\n"));
    console.log(chalk.redBright("Private Key:", keypair.secretKey, "\n"));
    console.log(chalk.redBright("Private Key (Base58):", bs58.encode(keypair.secretKey), "\n"));
    console.log(chalk.redBright("Mnemonic phrase:", mnemonic, "\n"));
    
    ask2();
}

async function ask2(){
    const answers = await inquirer.prompt({
        name: 'input',
        type: 'list',
        message: 'What do you want to do? \n',
        choices: [
            'Go back',
            'Exit'
        ],
    });

    return handle2(answers.input);
}

async function handle2(input){
    if (input === 'Go back'){
        console.clear()
        ask()
    } else {
        process.exit()
    }
}

async function restoreWalletAsk(){
    const answers = await inquirer.prompt({
        name: 'input',
        type: 'input',
        message: 'Type your mnemonic phrase \n'
    });

    return handle3(answers.input);
}

async function handle3(input){
    const mnemonic = input

    const seed = await bip39.mnemonicToSeed(mnemonic);
    const derivedSeed = derivePath(DERIVATION_PATH, seed.toString("hex")).key;

    const keypair = Keypair.fromSeed(derivedSeed);

    console.log(chalk.magentaBright("\nAddress:", keypair.publicKey.toBase58(), "\n"));
    console.log(chalk.redBright("Private Key:", keypair.secretKey, "\n"));
    console.log(chalk.redBright("Private Key (Base58):", bs58.encode(keypair.secretKey), "\n"));
    console.log(chalk.redBright("Mnemonic phrase:", mnemonic, "\n"));

    ask2();
}