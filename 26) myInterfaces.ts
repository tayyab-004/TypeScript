// Interface is a way to describe the structure of an object. 
// It is a way of specifying the shape that an object must have in order to be considered valid

interface User {
    readonly dbID: number,
    email: string,
    userID: number,
    googleID?: string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

const tayyab: User ={dbID: 11, email: "20014119-004", userID: 1122,
startTrail: () => {
    return "Trail Started"
},
getCoupon: (name: "tayab10", off: 10) => {
    return 10
}
}
tayyab.email ="tayyab"