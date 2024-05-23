//In TypeScript, the readonly keyword can be used to create a type that represents a value that is read-only.
// This means that the value cannot be modified once it is set.

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number  //optional (?) means that the property or parameter is not required and can be omitted when the type is used.
}

let myUser: User ={
    _id: "1234",
    name: "Tayyab",
    email: "20014119-004", 
    isActive: true
}

type cardNumber = {
    cardnumber: String;
}

type cardDate = {
    cardDate: String;
}

type cardDetails = cardNumber & cardDate & {
    cvv: Number
}


myUser.email = "20-004"
// myUser._id = "nothing"      error due to readonly property does not allow to modify _id
