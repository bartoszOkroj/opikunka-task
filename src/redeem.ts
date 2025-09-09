import {AccountData, CustomerId, Points} from "./types";

export function redeem(accounts:AccountData[], customerId: CustomerId, points: Points ) {
    const account = accounts.find(acc => acc.customerId === customerId);
    if (!account) {
        console.log("No account found");
        return;
    } else {
        if (points > account.balance) {
            console.log(`Sorry, the number of points exceeds the balance, operation fails.`)
            return;
        }

        account.balance -= points;
        console.log(account.balance < 10
                ? `Warning: Customer ${customerId} has a low balance: ${account.balance} points`
                : `${customerId} has ${account.balance} points`
        );
        return
    }
}