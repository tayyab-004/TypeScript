// type aliases is used where you want to  use a more descriptive name for a type,
// or when you want to reference a type that is complex or hard to read.

// type StringOrNumber = string | number;

// let x: StringOrNumber;
// x = 'hello';
// x = 123;

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return {name: "Tayyab", email: "20014119-004", isActive: true}
}

createUser({name: "Tayyab", email: "20014119-004", isActive: true})