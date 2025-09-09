#!/usr/bin/env node
import readline from "readline";
import {AccountData, ActionFn} from "./types";
import { earn } from "./earn";
import {redeem} from "./redeem";

const accounts: AccountData[] = [];

function handleCommand(
    accounts: AccountData[],
    args: string[],
    action: ActionFn,
    commandName: string
) {
    const [customerId, pointsStr] = args;
    const points = Number(pointsStr);

    if (!customerId || isNaN(points)) {
        console.log(`Wrong use of command '${commandName}', check arguments!`);
        return;
    }

    if(points < 0) {
        console.log('Only positive value of points can be used')
        return;
    }

    action(accounts, customerId, points);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "CLI> "
});

console.log("Welcome to task CLI program. You can use commands: 'earn <cosutomerId> <points>', 'redeem <customerId> <points>' or 'exit' to finish the process.   ");

rl.prompt();

rl.on("line", (line) => {
    const input = line.trim();
    if (!input) {
        rl.prompt();
        return;
    }

    const [cmd, ...args] = input.split(" ");

    switch(cmd) {
        case 'earn':
            handleCommand(accounts, args, earn, cmd);
            break;

        case 'redeem':
            handleCommand(accounts, args, redeem, cmd);
            break;

        case 'exit':
            rl.close()
            break

        default:
            console.log("Unknown command. Available: earn, redeem, exit");
    }

    rl.prompt();
});

rl.on("close", () => {
    console.log("End");
    process.exit(0);
});



