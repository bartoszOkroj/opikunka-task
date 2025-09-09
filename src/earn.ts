import {AccountData, CustomerId, Points} from "./types";

export function earn(accounts:AccountData[], customerId: CustomerId, points: Points ) {
    const account = accounts.find(acc => acc.customerId === customerId) ?? { customerId, balance: 0 };
    if (!accounts.includes(account)) accounts.push(account);

    account.balance += points;
    console.log(`${customerId} has ${account.balance} points`);
    return account
}