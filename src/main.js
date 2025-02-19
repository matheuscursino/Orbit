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

initialPrompt();

async function initialPrompt(){
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

   if (answers.input === 'Create Solana wallet'){
        console.clear()
        createWallet()
    } else if (answers.input === 'Restore wallet from mnemonic'){
        console.clear()
        restoreWalletPrompt()
    } else {
        process.exit()
    }
}

async function createWallet(){
    var seed;

    const mnemonic = bip39.generateMnemonic();

    const passphrase = await inquirer.prompt({
        name: 'input',
        type: 'password',
        message: 'Type a passphrase (leave empty for none):',
        mask: '*'
    })

    if(passphrase.input == ""){
        seed = await bip39.mnemonicToSeed(mnemonic);
    } else {
        seed = await bip39.mnemonicToSeed(mnemonic, passphrase.input);
    }

    const derivedSeed = derivePath(DERIVATION_PATH, seed.toString("hex")).key;

    const keypair = Keypair.fromSeed(derivedSeed);

    console.log(chalk.magentaBright("\nAddress:", keypair.publicKey.toBase58(), "\n"));
    console.log(chalk.redBright("Private Key:", keypair.secretKey, "\n"));
    console.log(chalk.redBright("Private Key (Base58):", bs58.encode(keypair.secretKey), "\n"));
    console.log(chalk.redBright("Mnemonic phrase:", mnemonic, "\n"));
    
    goBackPrompt();
}

async function goBackPrompt(){
    const answers = await inquirer.prompt({
        name: 'input',
        type: 'list',
        message: 'What do you want to do? \n',
        choices: [
            'Go back',
            'Exit'
        ],
    });

   if (answers.input === 'Go back'){
        console.clear()
        initialPrompt()
    } else {
        process.exit()
    }
   
}

async function restoreWalletPrompt(){
    const answers = await inquirer.prompt({
        name: 'input',
        type: 'input',
        message: 'Type your mnemonic phrase \n'
    });

    const mnemonic = answers.input

    const seed = await bip39.mnemonicToSeed(mnemonic);
    const derivedSeed = derivePath(DERIVATION_PATH, seed.toString("hex")).key;

    const keypair = Keypair.fromSeed(derivedSeed);

    console.log(chalk.magentaBright("\nAddress:", keypair.publicKey.toBase58(), "\n"));
    console.log(chalk.redBright("Private Key:", keypair.secretKey, "\n"));
    console.log(chalk.redBright("Private Key (Base58):", bs58.encode(keypair.secretKey), "\n"));
    console.log(chalk.redBright("Mnemonic phrase:", mnemonic, "\n"));

    goBackPrompt();
}