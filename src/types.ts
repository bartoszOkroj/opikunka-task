export type AccountData = {
    customerId: string,
    balance: number,
}

export type CustomerId = string;
export type Points = number;


export type ActionFn = (accounts: AccountData[], customerId: CustomerId, points: Points) => void;